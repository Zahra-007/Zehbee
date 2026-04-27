"use client";

import { useState, useCallback, useEffect } from "react";
import { rewriteText, changeTone, generateCaption, generatePrompt } from "@/lib/writingEngine";

type Mode = "rewrite" | "tone" | "caption" | "prompt";

interface WritingAssistantProps {
    initialMode?: Mode;
}

const TONES = ["Formal", "Casual", "Persuasive", "Confident"];
const PROMPT_PLATFORMS = ["Midjourney", "DALL·E 3", "Stable Diffusion", "ChatGPT", "Claude", "Gemini"] as const;

export default function WritingAssistant({ initialMode = "rewrite" }: WritingAssistantProps) {
    const [mode, setMode] = useState<Mode>(initialMode);
    
    // Inputs
    const [inputText, setInputText] = useState("");
    const [selectedTone, setSelectedTone] = useState("Formal");
    
    // Prompt inputs
    const [promptPlatform, setPromptPlatform] = useState<string>("Midjourney");
    const [promptStyle, setPromptStyle] = useState("photorealistic");
    const [promptMood, setPromptMood] = useState("normal");
    const [promptExtra, setPromptExtra] = useState("");

    // Outputs
    const [outputs, setOutputs] = useState<string[]>([]);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        setMode(initialMode);
        setOutputs([]);
    }, [initialMode]);

    const handleGenerate = useCallback((variations: number = 1) => {
        if (!inputText.trim()) return;

        setIsGenerating(true);
        setOutputs([]);

        setTimeout(() => {
            let results: string[] = [];
            
            if (mode === "rewrite") {
                const all = rewriteText(inputText);
                results = variations === 1 ? [all[0]] : all;
            } else if (mode === "tone") {
                const all = changeTone(inputText, selectedTone);
                results = variations === 1 ? [all[0]] : all;
            } else if (mode === "caption") {
                const all = generateCaption(inputText);
                results = variations === 1 ? [all[0]] : all;
            } else if (mode === "prompt") {
                results = generatePrompt(promptPlatform, inputText, promptStyle, promptMood, "", "", promptExtra);
            }

            // Fallback if engine returns empty
            if (results.length === 0 || !results[0]) {
                results = ["Could not generate output. Please try rephrasing your input."];
            }

            setOutputs(results);
            setIsGenerating(false);
        }, 600); // Add a small simulated delay for "AI generation" feel
    }, [inputText, mode, selectedTone, promptPlatform, promptStyle, promptMood, promptExtra]);

    const copyToClipboard = (text: string, index: number) => {
        if (!text) return;
        navigator.clipboard.writeText(text).then(() => {
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 2500);
        });
    };

    return (
        <div className="wa-wrap">
            {/* Mode Selector */}
            <div className="wa-tabs">
                {[
                    { id: "rewrite", label: "Rewrite Text" },
                    { id: "tone", label: "Tone Changer" },
                    { id: "caption", label: "Caption Generator" },
                    { id: "prompt", label: "Prompt Generator" }
                ].map((m) => (
                    <button 
                        key={m.id} 
                        onClick={() => { setMode(m.id as Mode); setOutputs([]); }} 
                        className={`wa-tab${mode === m.id ? " wa-tab--active" : ""}`}
                    >
                        {m.label}
                    </button>
                ))}
            </div>

            <div className="wa-content">
                {/* Mode specific controls */}
                {mode === "tone" && (
                    <div className="wa-section">
                        <label className="wa-label">Select Tone</label>
                        <select className="wa-select" value={selectedTone} onChange={(e) => setSelectedTone(e.target.value)}>
                            {TONES.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                    </div>
                )}

                {mode === "prompt" && (
                    <div className="wa-section">
                        <label className="wa-label">Platform</label>
                        <select className="wa-select" value={promptPlatform} onChange={(e) => setPromptPlatform(e.target.value)}>
                            {PROMPT_PLATFORMS.map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
                    </div>
                )}

                {/* Main Input */}
                <div className="wa-section">
                    <label className="wa-label" htmlFor="wa-input">
                        {mode === "rewrite" && "Text to rewrite"}
                        {mode === "tone" && "Text to transform"}
                        {mode === "caption" && "What is your post about? (e.g. Morning coffee vibes)"}
                        {mode === "prompt" && "Describe what you want"}
                    </label>
                    <textarea
                        id="wa-input"
                        className="wa-textarea"
                        placeholder="Type or paste your text here..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        rows={mode === "caption" ? 2 : 4}
                    />
                    <div className="wa-input-footer">
                        <span>{inputText.length} characters</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="wa-actions">
                    <button className="wa-btn-primary" onClick={() => handleGenerate(1)} disabled={!inputText.trim() || isGenerating}>
                        {isGenerating ? "Generating..." : "Generate"}
                    </button>
                    {mode !== "prompt" && (
                        <button className="wa-btn-secondary" onClick={() => handleGenerate(3)} disabled={!inputText.trim() || isGenerating}>
                            {isGenerating ? "..." : "Generate 3 Variations"}
                        </button>
                    )}
                </div>

                {/* Outputs */}
                {outputs.length > 0 && (
                    <div className="wa-outputs">
                        {outputs.map((out, idx) => (
                            <div key={idx} className="wa-output-card">
                                <div className="wa-output-header">
                                    <span className="wa-label" style={{ margin: 0 }}>Output {outputs.length > 1 ? idx + 1 : ""}</span>
                                    <button className="wa-btn-copy" onClick={() => copyToClipboard(out, idx)}>
                                        {copiedIndex === idx ? (
                                            <><svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Copied!</>
                                        ) : (
                                            <><svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" /></svg>Copy</>
                                        )}
                                    </button>
                                </div>
                                <div className="wa-output-text">{out}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <style>{`
                .wa-wrap { display: flex; flex-direction: column; gap: 1.5rem; background: var(--surface, #1e1e1e); padding: 1.5rem; border-radius: 1rem; border: 1px solid var(--border, #333); box-shadow: 0 10px 40px -10px rgba(0,0,0,0.3); }
                .wa-tabs { display: flex; flex-wrap: wrap; gap: 0.5rem; border-bottom: 1px solid var(--border, #333); padding-bottom: 1rem; }
                .wa-tab { font-size: 0.875rem; padding: 0.5rem 1rem; border-radius: 999px; border: 1px solid transparent; background: transparent; cursor: pointer; color: var(--text-muted, #9ca3af); transition: all 0.2s ease; font-weight: 500; }
                .wa-tab:hover { color: var(--text, #fff); background: rgba(255,255,255,0.05); }
                .wa-tab--active { background: var(--text, #fff); color: var(--bg, #000); }
                .wa-content { display: flex; flex-direction: column; gap: 1.25rem; }
                .wa-section { display: flex; flex-direction: column; gap: 0.5rem; }
                .wa-label { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; color: var(--text-muted, #9ca3af); }
                .wa-textarea { width: 100%; padding: 1rem; border: 1px solid var(--border, #333); border-radius: 0.75rem; font-size: 1rem; background: rgba(0,0,0,0.2); color: var(--text, #fff); outline: none; transition: border-color 0.2s ease; box-sizing: border-box; resize: vertical; line-height: 1.5; font-family: inherit; }
                .wa-textarea:focus { border-color: #6366f1; box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2); }
                .wa-textarea::placeholder { color: #6b7280; }
                .wa-select { width: 100%; padding: 0.75rem 1rem; border: 1px solid var(--border, #333); border-radius: 0.5rem; font-size: 0.9375rem; background: rgba(0,0,0,0.2); color: var(--text, #fff); outline: none; cursor: pointer; box-sizing: border-box; appearance: none; }
                .wa-select:focus { border-color: #6366f1; }
                .wa-input-footer { display: flex; justify-content: flex-end; font-size: 0.75rem; color: #6b7280; }
                .wa-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }
                .wa-btn-primary { flex: 1; min-width: 150px; padding: 0.875rem 1.5rem; background: #6366f1; color: #fff; border: none; border-radius: 0.75rem; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 14px 0 rgba(99, 102, 241, 0.39); }
                .wa-btn-primary:hover:not(:disabled) { background: #4f46e5; transform: translateY(-1px); }
                .wa-btn-primary:disabled { opacity: 0.5; cursor: not-allowed; box-shadow: none; }
                .wa-btn-secondary { flex: 1; min-width: 150px; padding: 0.875rem 1.5rem; background: transparent; color: var(--text, #fff); border: 1px solid var(--border, #333); border-radius: 0.75rem; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.2s ease; }
                .wa-btn-secondary:hover:not(:disabled) { background: rgba(255,255,255,0.05); }
                .wa-btn-secondary:disabled { opacity: 0.5; cursor: not-allowed; }
                .wa-outputs { display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem; }
                .wa-output-card { background: rgba(0,0,0,0.3); border: 1px solid var(--border, #333); border-radius: 0.75rem; overflow: hidden; }
                .wa-output-header { display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; border-bottom: 1px solid var(--border, #333); background: rgba(255,255,255,0.02); }
                .wa-btn-copy { display: flex; align-items: center; gap: 0.375rem; font-size: 0.75rem; padding: 0.375rem 0.75rem; border: 1px solid var(--border, #333); border-radius: 0.375rem; background: transparent; cursor: pointer; color: var(--text, #fff); font-weight: 500; transition: all 0.2s; }
                .wa-btn-copy:hover { background: rgba(255,255,255,0.1); }
                .wa-output-text { padding: 1.25rem; font-size: 1rem; line-height: 1.6; color: var(--text, #fff); white-space: pre-wrap; word-break: break-word; }
            `}</style>
        </div>
    );
}
