"use client";

import React, { useState, useRef } from "react";
import jsPDF from "jspdf";

export default function ImageToPdf() {
    const [files, setFiles] = useState<{ file: File; id: string; preview: string }[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = (newFiles: FileList | File[]) => {
        const imageFiles = Array.from(newFiles).filter(file => file.type.startsWith('image/'));
        if (imageFiles.length === 0) return;

        const newFileObjects = imageFiles.map(file => ({
            file,
            id: Math.random().toString(36).substring(7),
            preview: URL.createObjectURL(file)
        }));

        setFiles(prev => [...prev, ...newFileObjects]);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFileSelect(e.dataTransfer.files);
        }
    };

    const removeFile = (id: string) => {
        setFiles(prev => {
            const newFiles = prev.filter(f => f.id !== id);
            // Optional: revoke object URL to avoid memory leaks
            const fileToRemove = prev.find(f => f.id === id);
            if (fileToRemove) URL.revokeObjectURL(fileToRemove.preview);
            return newFiles;
        });
    };

    const moveFile = (index: number, direction: 'up' | 'down') => {
        if (direction === 'up' && index === 0) return;
        if (direction === 'down' && index === files.length - 1) return;

        setFiles(prev => {
            const newFiles = [...prev];
            const swapIndex = direction === 'up' ? index - 1 : index + 1;
            [newFiles[index], newFiles[swapIndex]] = [newFiles[swapIndex], newFiles[index]];
            return newFiles;
        });
    };

    const generatePdf = async () => {
        if (files.length === 0) return;
        setIsProcessing(true);

        try {
            const pdf = new jsPDF();

            for (let i = 0; i < files.length; i++) {
                const { file, preview } = files[i];
                
                // Add new page for subsequent images
                if (i > 0) {
                    pdf.addPage();
                }

                const imgProps = pdf.getImageProperties(preview);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                
                // Calculate ratio to fit the image on the page
                const widthRatio = pdfWidth / imgProps.width;
                const heightRatio = pdfHeight / imgProps.height;
                const ratio = Math.min(widthRatio, heightRatio);

                const finalWidth = imgProps.width * ratio;
                const finalHeight = imgProps.height * ratio;
                
                // Center the image
                const x = (pdfWidth - finalWidth) / 2;
                const y = (pdfHeight - finalHeight) / 2;

                // For compression/format, jspdf handles basic image embedding.
                // We assume FAST compression which is default.
                const imgFormat = file.type === 'image/png' ? 'PNG' : 'JPEG';
                pdf.addImage(preview, imgFormat, x, y, finalWidth, finalHeight);
            }

            pdf.save("converted-images.pdf");
        } catch (error) {
            console.error("Error generating PDF:", error);
            alert("An error occurred while generating the PDF.");
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="opt-container">
            {/* Upload Area */}
            <div 
                className={`opt-dropzone ${isDragging ? 'dragging' : ''}`}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                style={{ padding: files.length > 0 ? '2rem 1rem' : '4rem 2rem' }}
            >
                <input 
                    type="file" 
                    accept="image/*" 
                    multiple
                    className="hidden" 
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    onChange={(e) => {
                        if (e.target.files) handleFileSelect(e.target.files);
                    }}
                />
                {files.length === 0 ? (
                    <>
                        <svg className="opt-dropzone-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        <h3>Drag & drop images here</h3>
                        <p>or click to browse from your device</p>
                    </>
                ) : (
                    <p style={{ margin: 0, fontWeight: 600, color: 'var(--text)' }}>
                        + Add More Images
                    </p>
                )}
            </div>

            {/* List of images */}
            {files.length > 0 && (
                <div className="opt-controls" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <h4 style={{ fontSize: '1.1rem' }}>Images ({files.length})</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxHeight: '400px', overflowY: 'auto' }}>
                        {files.map((file, index) => (
                            <div key={file.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--white)', padding: '0.5rem 1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                                <img src={file.preview} alt="preview" style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                                <span style={{ flex: 1, fontSize: '0.9rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{file.file.name}</span>
                                
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <button 
                                        onClick={() => moveFile(index, 'up')} 
                                        disabled={index === 0}
                                        style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', padding: '4px', cursor: index === 0 ? 'not-allowed' : 'pointer' }}
                                    >
                                        ↑
                                    </button>
                                    <button 
                                        onClick={() => moveFile(index, 'down')} 
                                        disabled={index === files.length - 1}
                                        style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '4px', padding: '4px', cursor: index === files.length - 1 ? 'not-allowed' : 'pointer' }}
                                    >
                                        ↓
                                    </button>
                                    <button 
                                        onClick={() => removeFile(file.id)}
                                        style={{ background: '#fee2e2', color: '#ef4444', border: 'none', borderRadius: '4px', padding: '4px 8px', cursor: 'pointer', fontWeight: 600 }}
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button 
                        className="opt-btn-download" 
                        onClick={generatePdf}
                        disabled={isProcessing}
                        style={{ marginTop: '1rem', opacity: isProcessing ? 0.7 : 1 }}
                    >
                        {isProcessing ? 'Generating PDF...' : 'Download PDF'}
                    </button>
                </div>
            )}
        </div>
    );
}
