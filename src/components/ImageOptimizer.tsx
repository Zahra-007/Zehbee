"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { processImage, ProcessOptions, ProcessResult, formatBytes, generateSeoFilename } from "@/lib/imageEngine";

type Tab = 'compress' | 'convert' | 'resize';

export default function ImageOptimizer({ defaultTab = 'compress' }: { defaultTab?: Tab }) {
    const [activeTab, setActiveTab] = useState<Tab>(defaultTab);
    const [file, setFile] = useState<File | null>(null);
    const [filePreview, setFilePreview] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    
    // Options state
    const [quality, setQuality] = useState(0.8);
    const [targetFormat, setTargetFormat] = useState<'image/jpeg' | 'image/png' | 'image/webp'>('image/webp');
    const [width, setWidth] = useState<number | ''>('');
    const [height, setHeight] = useState<number | ''>('');
    const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);

    const [result, setResult] = useState<ProcessResult | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    // Premium Fake Processing State
    const [isSimulating, setIsSimulating] = useState(false);
    const [progress, setProgress] = useState(0);
    const [processingStep, setProcessingStep] = useState("");
    const simulationRef = useRef<NodeJS.Timeout | null>(null);
    
    // Use a ref to know if the file has been simulated at least once
    const hasSimulatedFile = useRef<File | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const getStepText = (p: number) => {
        if (p < 20) return "Analyzing image...";
        if (p < 50) return "Compressing image...";
        if (p < 80) return "Optimizing quality...";
        return "Finalizing...";
    };

    const performActualProcessing = useCallback(async (currentFile: File) => {
        setIsProcessing(true);
        try {
            let formatToUse = currentFile.type as 'image/jpeg' | 'image/png' | 'image/webp';
            if (activeTab === 'convert') {
                formatToUse = targetFormat;
            } else if (activeTab === 'compress') {
                // If it's not a standard format, convert to jpeg
                if (!['image/jpeg', 'image/png', 'image/webp'].includes(formatToUse)) {
                    formatToUse = 'image/jpeg';
                }
            }

            const options: ProcessOptions = {
                format: formatToUse,
                quality: activeTab === 'compress' ? quality : 0.9,
                width: activeTab === 'resize' && width ? Number(width) : undefined,
                height: activeTab === 'resize' && height ? Number(height) : undefined,
                maintainAspectRatio,
            };

            const res = await processImage(currentFile, options);
            setResult(res);
        } catch (error) {
            console.error("Error processing image:", error);
            alert("Error processing image. Please try another file.");
        } finally {
            setIsProcessing(false);
        }
    }, [activeTab, quality, targetFormat, width, height, maintainAspectRatio]);

    const startSimulationAndProcess = (newFile: File) => {
        if (simulationRef.current) clearInterval(simulationRef.current);
        
        setIsSimulating(true);
        setProgress(0);
        setProcessingStep("Analyzing image...");
        setResult(null);
        hasSimulatedFile.current = newFile;
        
        let currentProgress = 0;
        // Target ~5000ms duration. Updates every 50ms
        const increment = 100 / (5000 / 50); 
        
        simulationRef.current = setInterval(() => {
            currentProgress += increment;
            
            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(simulationRef.current!);
                setProgress(100);
                setProcessingStep("Finalizing...");
                
                // Do actual processing exactly when we hit 100%
                performActualProcessing(newFile).then(() => {
                    // Small delay to let user see 100% and "Finalizing..."
                    setTimeout(() => {
                        setIsSimulating(false);
                    }, 500);
                });
            } else {
                setProgress(currentProgress);
                setProcessingStep(getStepText(currentProgress));
            }
        }, 50);
    };

    const handleCancel = () => {
        if (simulationRef.current) {
            clearInterval(simulationRef.current);
            simulationRef.current = null;
        }
        setIsSimulating(false);
        setFile(null);
        setFilePreview(null);
        setResult(null);
        hasSimulatedFile.current = null;
    };

    const handleFileSelect = (newFile: File) => {
        setFile(newFile);
        setFilePreview(URL.createObjectURL(newFile));
        startSimulationAndProcess(newFile);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile && droppedFile.type.startsWith('image/')) {
            handleFileSelect(droppedFile);
        }
    };

    // Fast instant re-processing for option changes AFTER simulation is done
    useEffect(() => {
        // Only run instant updates if file exists, we're not simulating, and we've already done the initial simulation
        if (file && !isSimulating && file === hasSimulatedFile.current) {
            performActualProcessing(file);
        }
    }, [activeTab, quality, targetFormat, width, height, maintainAspectRatio, file, isSimulating, performActualProcessing]);

    const handleDownload = () => {
        if (!result || !file) return;
        const actionPrefix = activeTab === 'compress' ? 'compressed' : activeTab === 'convert' ? 'converted' : 'resized';
        const seoName = generateSeoFilename(file.name, result.blob.type, actionPrefix);
        
        const link = document.createElement('a');
        link.href = result.objectUrl;
        link.download = seoName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (simulationRef.current) clearInterval(simulationRef.current);
        };
    }, []);

    return (
        <div className="opt-container">
            {/* Tabs */}
            <div className="opt-tabs">
                {(['compress', 'convert', 'resize'] as Tab[]).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`opt-tab ${activeTab === tab ? 'active' : ''}`}
                        disabled={isSimulating}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)} Image
                    </button>
                ))}
            </div>

            {/* Upload Area (Hidden if file exists) */}
            {!file && (
                <div 
                    className={`opt-dropzone ${isDragging ? 'dragging' : ''}`}
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                >
                    <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                        onChange={(e) => {
                            if (e.target.files && e.target.files[0]) handleFileSelect(e.target.files[0]);
                        }}
                    />
                    <svg className="opt-dropzone-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    <h3>Drag & drop your image here</h3>
                    <p>or click to browse from your device</p>
                    <button 
                        className="btn-primary"
                        onClick={(e) => {
                            e.stopPropagation(); // prevent double trigger
                            fileInputRef.current?.click();
                        }}
                    >
                        Select Image
                    </button>
                </div>
            )}

            {/* Controls (Disabled during simulation) */}
            {file && (
                <div className="opt-controls" style={{ opacity: isSimulating ? 0.5 : 1, pointerEvents: isSimulating ? 'none' : 'auto' }}>
                    
                    {activeTab === 'compress' && (
                        <div className="opt-control-group" style={{ gridColumn: '1 / -1' }}>
                            <label>
                                Compression Quality: {Math.round(quality * 100)}%
                            </label>
                            <input 
                                type="range" 
                                min="0.1" max="1" step="0.1" 
                                value={quality} 
                                onChange={(e) => setQuality(Number(e.target.value))}
                                className="opt-range"
                            />
                        </div>
                    )}

                    {activeTab === 'convert' && (
                        <div className="opt-control-group" style={{ gridColumn: '1 / -1' }}>
                            <label>Output Format</label>
                            <select 
                                value={targetFormat}
                                onChange={(e) => setTargetFormat(e.target.value as any)}
                                className="opt-input"
                            >
                                <option value="image/jpeg">JPG / JPEG</option>
                                <option value="image/png">PNG</option>
                                <option value="image/webp">WEBP</option>
                            </select>
                        </div>
                    )}

                    {activeTab === 'resize' && (
                        <>
                            <div className="opt-control-group">
                                <label>Width (px)</label>
                                <input 
                                    type="number" 
                                    value={width} 
                                    onChange={(e) => setWidth(Number(e.target.value))}
                                    placeholder="Auto"
                                    className="opt-input"
                                />
                            </div>
                            <div className="opt-control-group">
                                <label>Height (px)</label>
                                <input 
                                    type="number" 
                                    value={height} 
                                    onChange={(e) => setHeight(Number(e.target.value))}
                                    placeholder="Auto"
                                    className="opt-input"
                                />
                            </div>
                            <div className="opt-checkbox-wrap" style={{ gridColumn: '1 / -1' }}>
                                <input 
                                    type="checkbox" 
                                    id="aspectRatio"
                                    checked={maintainAspectRatio} 
                                    onChange={(e) => setMaintainAspectRatio(e.target.checked)}
                                    className="opt-checkbox"
                                />
                                <label htmlFor="aspectRatio" style={{ margin: 0, cursor: 'pointer' }}>
                                    Maintain aspect ratio
                                </label>
                            </div>
                        </>
                    )}
                </div>
            )}

            {/* Simulation Overlay OR Results */}
            {isSimulating ? (
                <div className="opt-loader-panel opt-fade-in">
                    {filePreview && (
                        <img src={filePreview} alt="Preview" className="opt-loader-preview" />
                    )}
                    <div className="opt-loader-box">
                        <div className="opt-loader-header">
                            <span className="opt-loader-step">{processingStep}</span>
                            <span className="opt-loader-pct">{Math.floor(progress)}%</span>
                        </div>
                        <div className="opt-progress-track">
                            <div 
                                className="opt-progress-fill" 
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <button onClick={handleCancel} className="opt-loader-cancel">
                                Cancel Processing
                            </button>
                        </div>
                    </div>
                </div>
            ) : isProcessing && !result ? (
                <div className="opt-loading opt-fade-in">
                    <p>Applying changes...</p>
                </div>
            ) : result && file && (
                <div className="opt-results opt-fade-in">
                    
                    {/* Preview Comparison */}
                    <div className="opt-preview">
                        <img src={result.objectUrl} alt="Processed Preview" />
                    </div>

                    {/* Stats & Download */}
                    <div className="opt-stats-panel">
                        <div className="opt-stats-box">
                            <h4>Optimization Results</h4>
                            <div className="opt-stats-grid">
                                <div className="opt-stat-item">
                                    <span>Original Size</span>
                                    <strong>{formatBytes(file.size)}</strong>
                                </div>
                                <div className="opt-stat-item">
                                    <span>New Size</span>
                                    <strong>{formatBytes(result.sizeBytes)}</strong>
                                </div>
                                {file.size > result.sizeBytes && (
                                    <div className="opt-stat-item highlight" style={{ gridColumn: '1 / -1' }}>
                                        <span>Saved</span>
                                        <strong>
                                            {formatBytes(file.size - result.sizeBytes)} ({Math.round(((file.size - result.sizeBytes) / file.size) * 100)}%)
                                        </strong>
                                    </div>
                                )}
                            </div>
                        </div>



                        <button onClick={handleDownload} className="opt-btn-download">
                            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                            Download {activeTab === 'compress' ? 'Compressed' : activeTab === 'convert' ? 'Converted' : 'Resized'} Image
                        </button>
                        
                        <div style={{ textAlign: "center", marginTop: "1rem" }}>
                            <button 
                                onClick={handleCancel} 
                                style={{ background: "none", border: "none", color: "var(--text-3)", cursor: "pointer", textDecoration: "underline", fontSize: "0.9rem" }}
                            >
                                Process Another Image
                            </button>
                        </div>
                    </div>

                </div>
            )}

        </div>
    );
}
