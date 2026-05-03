"use client";

import React, { useState, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function QrGenerator() {
    const [inputValue, setInputValue] = useState("https://zehbee.com");
    const [size, setSize] = useState(256);
    const [fgColor, setFgColor] = useState("#0f172a"); // var(--text)
    const [bgColor, setBgColor] = useState("#ffffff");
    
    const qrRef = useRef<HTMLDivElement>(null);

    const downloadQr = () => {
        if (!qrRef.current) return;
        
        const svg = qrRef.current.querySelector("svg");
        if (!svg) return;
        
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        
        img.onload = () => {
            canvas.width = size;
            canvas.height = size;
            if (ctx) {
                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, size, size);
                ctx.drawImage(img, 0, 0);
                
                const pngFile = canvas.toDataURL("image/png");
                const downloadLink = document.createElement("a");
                downloadLink.download = "qrcode.png";
                downloadLink.href = `${pngFile}`;
                downloadLink.click();
            }
        };
        
        img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
    };

    return (
        <div className="opt-container">
            <div className="opt-controls" style={{ marginTop: '0', gridTemplateColumns: '1fr 1fr' }}>
                <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>
                        URL or Text
                    </label>
                    <input 
                        type="text" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter URL or text here..."
                        className="opt-input"
                    />
                </div>

                <div className="opt-control-group">
                    <label>Foreground Color</label>
                    <input 
                        type="color" 
                        value={fgColor}
                        onChange={(e) => setFgColor(e.target.value)}
                        className="opt-input"
                        style={{ padding: '4px', height: '46px', cursor: 'pointer' }}
                    />
                </div>

                <div className="opt-control-group">
                    <label>Background Color</label>
                    <input 
                        type="color" 
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="opt-input"
                        style={{ padding: '4px', height: '46px', cursor: 'pointer' }}
                    />
                </div>

                <div className="opt-control-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Size: {size}px</label>
                    <input 
                        type="range" 
                        min="128" 
                        max="1024" 
                        step="8"
                        value={size}
                        onChange={(e) => setSize(Number(e.target.value))}
                        className="opt-range"
                    />
                </div>
            </div>

            <div className="opt-results" style={{ gridTemplateColumns: '1fr', justifyItems: 'center', marginTop: '2.5rem' }}>
                <div 
                    className="opt-preview" 
                    style={{ background: 'var(--off-white)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', width: '100%', maxWidth: '500px' }}
                >
                    <div ref={qrRef} style={{ background: bgColor, padding: '1rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
                        <QRCodeSVG 
                            value={inputValue || "https://zehbee.com"} 
                            size={size > 300 ? 300 : size} // Visual cap for preview
                            fgColor={fgColor}
                            bgColor={bgColor}
                            level="H"
                            includeMargin={false}
                        />
                    </div>
                    
                    <button className="opt-btn-download" onClick={downloadQr}>
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ marginRight: '8px' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg>
                        Download PNG
                    </button>
                </div>
            </div>
        </div>
    );
}
