"use client";

import { useState, useCallback } from "react";

const PLATFORMS = ["Midjourney", "DALL·E 3", "Stable Diffusion", "ChatGPT", "Claude", "Gemini"] as const;

const STYLES: Record<string, string[]> = {
    "Midjourney": ["photorealistic", "digital art", "oil painting", "watercolor", "anime", "cinematic", "3D render", "concept art", "sketch"],
    "DALL·E 3": ["photorealistic", "digital illustration", "watercolor", "cartoon", "oil painting", "3D render", "flat design"],
    "Stable Diffusion": ["photorealistic", "hyper-detailed", "anime", "concept art", "fantasy art", "gothic", "cyberpunk"],
    "ChatGPT": ["formal", "casual", "bullet points", "step-by-step", "storytelling", "persuasive", "technical"],
    "Claude": ["formal", "casual", "analytical", "creative", "concise", "detailed", "conversational"],
    "Gemini": ["formal", "casual", "creative", "analytical", "structured", "concise"],
};

const MOODS: Record<string, string[]> = {
    "Midjourney": ["normal", "dramatic", "peaceful", "mysterious", "vibrant", "dark", "dreamy", "epic", "ethereal", "melancholic"],
    "DALL·E 3": ["normal", "dramatic", "peaceful", "mysterious", "vibrant", "cheerful", "dark", "dreamy"],
    "Stable Diffusion": ["normal", "dramatic", "atmospheric", "moody", "dark", "vibrant", "ethereal", "gritty"],
    "ChatGPT": ["normal", "professional", "friendly", "motivating", "empathetic", "direct", "humorous"],
    "Claude": ["normal", "thoughtful", "direct", "empathetic", "analytical", "friendly", "formal"],
    "Gemini": ["normal", "professional", "friendly", "creative", "analytical", "concise"],
};

const LIGHTING = [
    "golden hour lighting", "soft studio lighting", "dramatic rim lighting",
    "cinematic lighting", "neon lighting", "natural daylight", "moonlight", "volumetric fog lighting",
];

const CAMERAS = [
    "shot on Sony A7 IV", "shot on Canon EOS R5", "wide angle lens",
    "macro photography", "aerial drone shot", "85mm portrait lens", "fisheye lens", "telephoto lens",
];

const MJ_PARAMS: Record<string, string> = {
    "photorealistic": "--v 6 --ar 16:9 --q 2",
    "digital art": "--v 6 --ar 1:1 --stylize 750",
    "oil painting": "--v 6 --ar 4:3 --stylize 500",
    "watercolor": "--v 6 --ar 4:3 --stylize 600",
    "anime": "--niji 6 --ar 16:9 --stylize 500",
    "cinematic": "--v 6 --ar 21:9 --stylize 400",
    "3D render": "--v 6 --ar 1:1 --q 2 --stylize 300",
    "concept art": "--v 6 --ar 16:9 --stylize 750",
    "sketch": "--v 6 --ar 1:1 --stylize 200",
};

const SD_SUFFIXES: Record<string, string> = {
    "photorealistic": ", (masterpiece:1.2), (best quality:1.2), ultra realistic, 8k uhd, DSLR, soft lighting, high quality",
    "hyper-detailed": ", intricate details, hyperrealistic, sharp focus, 8k, professional photography",
    "anime": ", anime style, (masterpiece:1.2), vibrant colors, cel shading, studio ghibli",
    "concept art": ", concept art, detailed illustration, artstation, trending, professional",
    "fantasy art": ", epic fantasy, magical, detailed, vibrant, digital painting, artstation",
    "gothic": ", dark atmosphere, gothic architecture, moody, detailed shadows, high contrast",
    "cyberpunk": ", cyberpunk city, neon lights, rain reflections, futuristic, high tech",
};

const NEG_PROMPT = "Negative prompt: ugly, blurry, low quality, watermark, signature, deformed, extra limbs, bad anatomy";

const QUALITY_TAGS: Record<string, string[]> = {
    "photorealistic": ["ultra-realistic", "sharp focus", "professional photography", "8K resolution", "DSLR quality"],
    "digital art": ["highly detailed", "vibrant colors", "sharp edges", "trending on ArtStation"],
    "oil painting": ["textured brushstrokes", "rich color palette", "classical composition", "museum quality"],
    "watercolor": ["soft edges", "translucent layers", "delicate washes", "fine art"],
    "anime": ["clean line art", "vibrant colors", "expressive eyes", "cel shaded"],
    "cinematic": ["cinematic composition", "anamorphic lens flare", "film grain", "color graded"],
    "3D render": ["octane render", "physically based rendering", "4K resolution"],
    "concept art": ["detailed illustration", "ArtStation quality", "trending", "professional concept art"],
    "sketch": ["fine pencil lines", "detailed cross-hatching", "hand-drawn", "graphite on paper"],
    "hyper-detailed": ["intricate details", "ultra sharp", "8K", "professional photography"],
    "fantasy art": ["magical atmosphere", "epic scale", "rich environment", "ArtStation trending"],
    "gothic": ["dark dramatic tones", "high contrast", "dramatic shadows", "ornate gothic details"],
    "cyberpunk": ["neon reflections", "rain-slicked streets", "holographic displays"],
};

function cleanSubject(raw: string): string {
    return raw
        .replace(/^(give me a prompt (to |for )?(generate |create |make |render )?|generate (a |an )?(prompt for )?|create (a |an )?|make (a |an )?|prompt for |a prompt (to |for )?)/i, "")
        .replace(/\bphoto[- ]realistic\b/gi, "photorealistic")
        .trim();
}

function buildImagePrompt(
    platform: string,
    subject: string,
    style: string,
    mood: string,
    lighting: string,
    camera: string,
    extra: string
): string {
    const cleaned = cleanSubject(subject);
    const moodActive = mood && mood !== "normal";
    const quality = QUALITY_TAGS[style] || ["highly detailed", "sharp focus", "professional"];

    if (platform === "Midjourney") {
        const parts: string[] = [cleaned, style];
        if (moodActive) parts.push(`${mood} atmosphere`);
        if (lighting) parts.push(lighting);
        if (camera) parts.push(camera);
        parts.push(...quality.slice(0, 3));
        if (extra) parts.push(extra);
        const param = MJ_PARAMS[style] || "--v 6 --ar 16:9 --stylize 500";
        return `${parts.join(", ")} ${param}`;
    }

    if (platform === "DALL\u00B7E 3") {
        const moodStr = moodActive ? `with a ${mood} mood` : "";
        const lightStr = lighting ? `lit by ${lighting}` : "";
        const camStr = camera ? `captured with a ${camera}` : "";
        const qualStr = quality.slice(0, 2).join(", ");
        const extras = [moodStr, lightStr, camStr, qualStr, extra].filter(Boolean).join(", ");
        return `A ${style} image of ${cleaned}${extras ? ", " + extras : ""}. Highly detailed and professional quality.`;
    }

    if (platform === "Stable Diffusion") {
        const parts: string[] = [cleaned];
        if (moodActive) parts.push(`${mood} atmosphere`);
        if (lighting) parts.push(lighting);
        if (camera) parts.push(camera);
        if (extra) parts.push(extra);
        const suffix = SD_SUFFIXES[style] || ", masterpiece, best quality, highly detailed";
        return `${parts.join(", ")}${suffix}\n\n${NEG_PROMPT}`;
    }

    return cleaned;
}

function buildTextPrompt(
    platform: string,
    subject: string,
    style: string,
    mood: string,
    extra: string
): string {
    const cleaned = cleanSubject(subject);

    const formatMap: Record<string, string> = {
        "formal": "Write in a formal, professional tone with complete sentences.",
        "casual": "Use a casual, conversational tone like talking to a friend.",
        "bullet points": "Structure the entire response using clear bullet points.",
        "step-by-step": "Break down the response into numbered steps in logical order.",
        "storytelling": "Use a narrative storytelling format with a beginning, middle, and end.",
        "persuasive": "Write persuasively with strong arguments and a clear call to action.",
        "technical": "Use precise technical language and include concrete examples.",
        "analytical": "Provide a structured analytical breakdown with evidence and reasoning.",
        "creative": "Be inventive, original, and think outside the box.",
        "concise": "Be concise and direct. No filler words. Every sentence adds value.",
        "detailed": "Provide a thorough, comprehensive, and detailed response.",
        "conversational": "Keep it natural, warm, and conversational.",
        "structured": "Use clear headings and organized sections.",
    };

    const moodMap: Record<string, string> = {
        "professional": "Maintain a polished, professional tone throughout.",
        "friendly": "Keep the tone warm, approachable, and encouraging.",
        "motivating": "Be inspiring — energize and motivate the reader.",
        "empathetic": "Show genuine understanding and empathy.",
        "direct": "Be direct. Get straight to the point. No fluff.",
        "humorous": "Add light, appropriate humor where it fits naturally.",
        "thoughtful": "Be thoughtful, nuanced, and carefully considered.",
        "analytical": "Prioritize logic, data, and evidence-based reasoning.",
    };

    const lines: string[] = [
        `You are an expert assistant. Your task:`,
        `"${cleaned}"`,
        ``,
        `Instructions:`,
    ];
    if (formatMap[style]) lines.push(`- ${formatMap[style]}`);
    if (mood !== "normal" && moodMap[mood]) lines.push(`- ${moodMap[mood]}`);
    if (extra) lines.push(`- Additional context: ${extra}`);
    lines.push(`- Provide a high-quality, well-structured response that fully addresses the task.`);

    return lines.join("\n");
}

const QUICK_PRESETS = [
    { label: "Realistic photo", subject: "a red fox sitting in an autumn forest", platform: "Midjourney", style: "photorealistic", mood: "peaceful" },
    { label: "Logo design", subject: "minimalist tech startup logo mark", platform: "DALL\u00B7E 3", style: "flat design", mood: "vibrant" },
    { label: "Portrait", subject: "a woman with silver hair in soft studio light", platform: "Stable Diffusion", style: "photorealistic", mood: "dramatic" },
    { label: "ChatGPT task", subject: "Write a professional cold email for a SaaS product", platform: "ChatGPT", style: "formal", mood: "professional" },
    { label: "Product shot", subject: "luxury perfume bottle on white marble surface", platform: "Midjourney", style: "cinematic", mood: "mysterious" },
];

const IMAGE_PLATFORMS = ["Midjourney", "DALL\u00B7E 3", "Stable Diffusion"];

export default function AiPromptGenerator() {
    const [platform, setPlatform] = useState<string>("Midjourney");
    const [subject, setSubject] = useState("");
    const [style, setStyle] = useState("photorealistic");
    const [mood, setMood] = useState("normal");
    const [lighting, setLighting] = useState("");
    const [camera, setCamera] = useState("");
    const [extra, setExtra] = useState("");
    const [output, setOutput] = useState("");
    const [copied, setCopied] = useState(false);

    const isImage = IMAGE_PLATFORMS.includes(platform);

    const handlePlatformChange = (p: string) => {
        setPlatform(p);
        setStyle(STYLES[p][0]);
        setMood(MOODS[p][0]);
        setOutput("");
    };

    const handlePreset = (preset: typeof QUICK_PRESETS[0]) => {
        setPlatform(preset.platform);
        setSubject(preset.subject);
        setStyle(preset.style);
        setMood(preset.mood);
        setOutput("");
    };

    const generate = useCallback(() => {
        if (!subject.trim()) return;
        const result = isImage
            ? buildImagePrompt(platform, subject.trim(), style, mood, lighting, camera, extra.trim())
            : buildTextPrompt(platform, subject.trim(), style, mood, extra.trim());
        setOutput(result);
        setCopied(false);
    }, [platform, subject, style, mood, lighting, camera, extra, isImage]);

    const copyToClipboard = () => {
        if (!output) return;
        navigator.clipboard.writeText(output).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        });
    };

    return (
        <div className="apg-wrap">
            <div className="apg-section">
                <p className="apg-label">Platform</p>
                <div className="apg-tabs">
                    {PLATFORMS.map((p) => (
                        <button key={p} onClick={() => handlePlatformChange(p)} className={`apg-tab${platform === p ? " apg-tab--active" : ""}`}>
                            {p}
                        </button>
                    ))}
                </div>
            </div>

            <div className="apg-section">
                <p className="apg-label">Quick start</p>
                <div className="apg-presets">
                    {QUICK_PRESETS.map((preset) => (
                        <button key={preset.label} className="apg-preset" onClick={() => handlePreset(preset)}>
                            {preset.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="apg-section">
                <label className="apg-label" htmlFor="apg-subject">
                    {isImage ? "Describe your subject or scene" : "What do you want help with?"}
                </label>
                <input
                    id="apg-subject"
                    type="text"
                    className="apg-input"
                    placeholder={isImage ? "e.g. korean woman aged 50, elegant, traditional clothing" : "e.g. Write a cold email for a SaaS product"}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && generate()}
                />
                {isImage && <p className="apg-hint">Tip: just describe what you want to see — no need to say &quot;generate a prompt for&quot;</p>}
            </div>

            <div className="apg-grid-2">
                <div>
                    <label className="apg-label" htmlFor="apg-style">{isImage ? "Art Style" : "Format"}</label>
                    <select id="apg-style" className="apg-select" value={style} onChange={(e) => setStyle(e.target.value)}>
                        {(STYLES[platform] || []).map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                </div>
                <div>
                    <label className="apg-label" htmlFor="apg-mood">{isImage ? "Mood / Atmosphere" : "Tone"}</label>
                    <select id="apg-mood" className="apg-select" value={mood} onChange={(e) => setMood(e.target.value)}>
                        {(MOODS[platform] || []).map((m) => <option key={m} value={m}>{m}</option>)}
                    </select>
                </div>
            </div>

            {isImage && (
                <div className="apg-grid-2">
                    <div>
                        <label className="apg-label" htmlFor="apg-lighting">Lighting (optional)</label>
                        <select id="apg-lighting" className="apg-select" value={lighting} onChange={(e) => setLighting(e.target.value)}>
                            <option value="">— none —</option>
                            {LIGHTING.map((l) => <option key={l} value={l}>{l}</option>)}
                        </select>
                    </div>
                    <div>
                        <label className="apg-label" htmlFor="apg-camera">Camera (optional)</label>
                        <select id="apg-camera" className="apg-select" value={camera} onChange={(e) => setCamera(e.target.value)}>
                            <option value="">— none —</option>
                            {CAMERAS.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                </div>
            )}

            <div className="apg-section">
                <label className="apg-label" htmlFor="apg-extra">Extra details (optional)</label>
                <input
                    id="apg-extra"
                    type="text"
                    className="apg-input"
                    placeholder={isImage ? "e.g. cherry blossoms in background, soft smile, hanbok dress" : "e.g. audience is startup founders, keep it under 150 words"}
                    value={extra}
                    onChange={(e) => setExtra(e.target.value)}
                />
            </div>

            <button className="apg-btn-generate" onClick={generate} disabled={!subject.trim()}>
                Generate Prompt
            </button>

            {output && (
                <div className="apg-output-wrap">
                    <div className="apg-output-header">
                        <span className="apg-label" style={{ margin: 0 }}>Generated prompt</span>
                        <button className="apg-btn-copy" onClick={copyToClipboard}>
                            {copied ? (
                                <><svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Copied!</>
                            ) : (
                                <><svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" /></svg>Copy</>
                            )}
                        </button>
                    </div>
                    <div className="apg-output">{output}</div>
                </div>
            )}

            <style>{`
        .apg-wrap { display: flex; flex-direction: column; gap: 1.25rem; }
        .apg-section { display: flex; flex-direction: column; gap: 0.5rem; }
        .apg-label { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-muted, #6b7280); margin: 0; }
        .apg-hint { font-size: 0.75rem; color: var(--text-muted, #9ca3af); margin: 0.15rem 0 0; }
        .apg-tabs { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .apg-tab { font-size: 0.8125rem; padding: 0.35rem 0.85rem; border-radius: 999px; border: 1px solid var(--border, #e5e7eb); background: transparent; cursor: pointer; color: var(--text-muted, #6b7280); transition: all 0.15s ease; font-weight: 500; }
        .apg-tab:hover { border-color: var(--text, #111); color: var(--text, #111); }
        .apg-tab--active { background: var(--text, #111); color: var(--bg, #fff); border-color: transparent; }
        .apg-presets { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .apg-preset { font-size: 0.8125rem; padding: 0.3rem 0.75rem; border-radius: 999px; border: 1px dashed var(--border, #e5e7eb); background: transparent; cursor: pointer; color: var(--text-muted, #6b7280); transition: all 0.15s ease; }
        .apg-preset:hover { background: var(--surface, #f9fafb); color: var(--text, #111); }
        .apg-input { width: 100%; padding: 0.65rem 0.9rem; border: 1px solid var(--border, #e5e7eb); border-radius: 0.5rem; font-size: 0.9375rem; background: var(--bg, #fff); color: var(--text, #111); outline: none; transition: border-color 0.15s ease; box-sizing: border-box; }
        .apg-input:focus { border-color: var(--text, #111); }
        .apg-input::placeholder { color: var(--text-muted, #9ca3af); }
        .apg-select { width: 100%; padding: 0.65rem 0.9rem; border: 1px solid var(--border, #e5e7eb); border-radius: 0.5rem; font-size: 0.9375rem; background: var(--bg, #fff); color: var(--text, #111); outline: none; cursor: pointer; box-sizing: border-box; }
        .apg-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
        @media (max-width: 540px) { .apg-grid-2 { grid-template-columns: 1fr; } }
        .apg-btn-generate { width: 100%; padding: 0.8rem 1rem; background: var(--text, #111); color: var(--bg, #fff); border: none; border-radius: 0.5rem; font-size: 0.9375rem; font-weight: 600; cursor: pointer; transition: opacity 0.15s ease; }
        .apg-btn-generate:disabled { opacity: 0.35; cursor: not-allowed; }
        .apg-btn-generate:hover:not(:disabled) { opacity: 0.85; }
        .apg-output-wrap { display: flex; flex-direction: column; gap: 0.5rem; }
        .apg-output-header { display: flex; align-items: center; justify-content: space-between; }
        .apg-btn-copy { display: flex; align-items: center; gap: 0.3rem; font-size: 0.8125rem; padding: 0.3rem 0.75rem; border: 1px solid var(--border, #e5e7eb); border-radius: 0.375rem; background: transparent; cursor: pointer; color: var(--text, #111); font-weight: 500; transition: background 0.15s; }
        .apg-btn-copy:hover { background: var(--surface, #f9fafb); }
        .apg-output { background: var(--surface, #f9fafb); border: 1px solid var(--border, #e5e7eb); border-radius: 0.5rem; padding: 1rem 1.1rem; font-size: 0.9375rem; line-height: 1.75; color: var(--text, #111); white-space: pre-wrap; word-break: break-word; }
      `}</style>
        </div>
    );
}