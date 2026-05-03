"use client";

import React, { useState, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import JSZip from "jszip";
import { saveAs } from "file-saver";

// Setup PDF.js worker
if (typeof window !== "undefined") {
    pdfjsLib.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
}

type ExtractedImage = {
    id: string;
    url: string;
    pageNum: number;
};

export default function PdfToImage() {
    const [file, setFile] = useState<File | null>(null);
    const [images, setImages] = useState<ExtractedImage[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = async (selectedFile: File) => {
        if (!selectedFile || selectedFile.type !== "application/pdf") {
            alert("Please select a valid PDF file.");
            return;
        }
        
        setFile(selectedFile);
        setImages([]);
        setIsProcessing(true);
        setProgress(0);

        try {
            const fileReader = new FileReader();
            
            fileReader.onload = async function() {
                const typedarray = new Uint8Array(this.result as ArrayBuffer);
                const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;
                const numPages = pdf.numPages;
                const extracted: ExtractedImage[] = [];

                for (let i = 1; i <= numPages; i++) {
                    const page = await pdf.getPage(i);
                    const viewport = page.getViewport({ scale: 2.0 }); // 2x scale for better quality
                    
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    
                    if (context) {
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;
                        
                        const renderContext = {
                            canvasContext: context,
                            viewport: viewport
                        };
                        
                        await page.render(renderContext).promise;
                        
                        // Default to high quality JPEG to save memory compared to PNG
                        const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
                        
                        extracted.push({
                            id: Math.random().toString(36).substring(7),
                            url: dataUrl,
                            pageNum: i
                        });
                        
                        setProgress(Math.round((i / numPages) * 100));
                        
                        // Force a small delay to allow UI to update
                        await new Promise(resolve => setTimeout(resolve, 10));
                    }
                }
                
                setImages(extracted);
                setIsProcessing(false);
            };
            
            fileReader.readAsArrayBuffer(selectedFile);
        } catch (error) {
            console.error("Error extracting PDF:", error);
            alert("Failed to extract images from PDF.");
            setIsProcessing(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFileSelect(e.dataTransfer.files[0]);
        }
    };

    const downloadZip = async () => {
        if (images.length === 0 || !file) return;
        
        const zip = new JSZip();
        const baseFileName = file.name.replace('.pdf', '');
        
        images.forEach((img) => {
            // Remove the data:image/jpeg;base64, part
            const base64Data = img.url.replace(/^data:image\/jpeg;base64,/, "");
            zip.file(`${baseFileName}_page_${img.pageNum}.jpg`, base64Data, { base64: true });
        });
        
        const content = await zip.generateAsync({ type: "blob" });
        saveAs(content, `${baseFileName}_images.zip`);
    };

    return (
        <div className="opt-container">
            {/* Upload Area */}
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
                        accept="application/pdf" 
                        className="hidden" 
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                        onChange={(e) => {
                            if (e.target.files && e.target.files[0]) handleFileSelect(e.target.files[0]);
                        }}
                    />
                    <svg className="opt-dropzone-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3>Drag & drop PDF here</h3>
                    <p>or click to browse from your device</p>
                </div>
            )}

            {/* Processing State */}
            {isProcessing && (
                <div className="opt-loader-panel opt-fade-in" style={{ marginTop: '0', minHeight: '200px' }}>
                    <div className="opt-loader-box">
                        <div className="opt-loader-header">
                            <span className="opt-loader-step">Extracting Pages...</span>
                            <span className="opt-loader-pct">{progress}%</span>
                        </div>
                        <div className="opt-progress-track">
                            <div 
                                className="opt-progress-fill" 
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            )}

            {/* Results Area */}
            {!isProcessing && images.length > 0 && (
                <div className="opt-controls" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <h4 style={{ fontSize: '1.1rem', margin: '0' }}>{file?.name}</h4>
                            <p style={{ color: 'var(--text-3)', margin: '0', fontSize: '0.9rem' }}>{images.length} pages extracted</p>
                        </div>
                        <button 
                            onClick={() => { setFile(null); setImages([]); }}
                            style={{ background: 'none', border: 'none', color: 'var(--text-3)', cursor: 'pointer', textDecoration: 'underline' }}
                        >
                            Extract another
                        </button>
                    </div>

                    <button className="opt-btn-download" onClick={downloadZip}>
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ marginRight: '8px' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg>
                        Download All as ZIP
                    </button>

                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
                        gap: '1rem',
                        maxHeight: '400px',
                        overflowY: 'auto',
                        padding: '1rem',
                        background: 'var(--white)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius)'
                    }}>
                        {images.map((img) => (
                            <div key={img.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                                <img 
                                    src={img.url} 
                                    alt={`Page ${img.pageNum}`} 
                                    style={{ 
                                        width: '100%', 
                                        height: 'auto', 
                                        objectFit: 'contain', 
                                        border: '1px solid var(--border)', 
                                        borderRadius: '4px',
                                        boxShadow: 'var(--shadow-sm)'
                                    }} 
                                />
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-2)' }}>Page {img.pageNum}</span>
                                <a 
                                    href={img.url} 
                                    download={`${file?.name.replace('.pdf', '')}_page_${img.pageNum}.jpg`}
                                    style={{ 
                                        fontSize: '0.8rem', 
                                        color: 'var(--accent)', 
                                        textDecoration: 'none', 
                                        fontWeight: 600,
                                        display: 'inline-block',
                                        padding: '4px 8px',
                                        background: 'var(--accent-light)',
                                        borderRadius: '4px'
                                    }}
                                >
                                    Download
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
