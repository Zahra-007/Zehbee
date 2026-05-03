"use client";

import React, { useState, useEffect } from "react";

export default function TextCounter() {
    const [text, setText] = useState("");
    const [stats, setStats] = useState({
        words: 0,
        characters: 0,
        charactersNoSpaces: 0,
        sentences: 0,
        paragraphs: 0,
        readingTime: 0
    });

    useEffect(() => {
        const calculateStats = () => {
            const words = text.trim() ? text.trim().split(/\s+/).length : 0;
            const characters = text.length;
            const charactersNoSpaces = text.replace(/\s+/g, '').length;
            const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
            const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0).length;
            // Average reading speed is ~200 words per minute
            const readingTime = Math.ceil(words / 200);

            setStats({
                words,
                characters,
                charactersNoSpaces,
                sentences,
                paragraphs,
                readingTime
            });
        };

        calculateStats();
    }, [text]);

    const handleClear = () => {
        setText("");
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        alert("Text copied to clipboard!");
    };

    return (
        <div className="opt-container">
            <div className="opt-controls" style={{ marginTop: '0', gridTemplateColumns: '1fr', padding: '0', border: 'none', background: 'transparent' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <label style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)' }}>
                        Type or paste your text below:
                    </label>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button 
                            onClick={handleCopy} 
                            style={{ background: 'none', border: 'none', color: 'var(--text-2)', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500 }}
                        >
                            Copy Text
                        </button>
                        <button 
                            onClick={handleClear} 
                            style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500 }}
                        >
                            Clear
                        </button>
                    </div>
                </div>
                
                <textarea 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Start typing here..."
                    className="opt-input"
                    style={{ minHeight: '300px', resize: 'vertical', fontSize: '1.05rem', lineHeight: 1.6, padding: '1.5rem' }}
                />
            </div>

            <div className="opt-results" style={{ gridTemplateColumns: '1fr', marginTop: '2.5rem' }}>
                <div className="opt-stats-box" style={{ width: '100%' }}>
                    <h4 style={{ marginBottom: '1.5rem', textAlign: 'center', fontSize: '1.2rem', color: 'var(--text)' }}>Text Statistics</h4>
                    <div className="opt-stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem' }}>
                        <div className="opt-stat-item" style={{ textAlign: 'center' }}>
                            <span>Words</span>
                            <strong style={{ fontSize: '2.5rem', color: 'var(--accent)' }}>{stats.words}</strong>
                        </div>
                        <div className="opt-stat-item" style={{ textAlign: 'center' }}>
                            <span>Characters</span>
                            <strong style={{ fontSize: '2.5rem', color: 'var(--accent)' }}>{stats.characters}</strong>
                        </div>
                        <div className="opt-stat-item" style={{ textAlign: 'center' }}>
                            <span>Sentences</span>
                            <strong style={{ fontSize: '2.5rem', color: 'var(--accent)' }}>{stats.sentences}</strong>
                        </div>
                        <div className="opt-stat-item" style={{ textAlign: 'center' }}>
                            <span>Paragraphs</span>
                            <strong style={{ fontSize: '2.5rem', color: 'var(--accent)' }}>{stats.paragraphs}</strong>
                        </div>
                        <div className="opt-stat-item" style={{ textAlign: 'center' }}>
                            <span>Characters (no spaces)</span>
                            <strong style={{ fontSize: '2rem', color: 'var(--text)' }}>{stats.charactersNoSpaces}</strong>
                        </div>
                        <div className="opt-stat-item" style={{ textAlign: 'center' }}>
                            <span>Reading Time</span>
                            <strong style={{ fontSize: '2rem', color: 'var(--text)' }}>{stats.readingTime} min</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
