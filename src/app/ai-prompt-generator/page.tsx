import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/lib/data";

export const metadata: Metadata = {
    title: "Free AI Prompt Generator Online — No Signup | Zehbee",
    description: "Generate highly optimized prompts for Midjourney, ChatGPT, and more. Free, no account needed, instant results.",
    alternates: { canonical: "https://zehbee.com/ai-prompt-generator" },
    openGraph: {
        title: "Free AI Prompt Generator — Zehbee",
        description: "Generate optimized prompts instantly. Free, no signup, browser-based.",
        url: "https://zehbee.com/ai-prompt-generator",
        siteName: "Zehbee",
        type: "website",
    },
};

const faqs = [
    {
        q: "Is this AI prompt generator free?",
        a: "Yes — 100% free, no hidden fees, no account required. You can use it as many times as you want.",
    },
    {
        q: "What AI models is this for?",
        a: "The tool generates optimized prompts for image models like Midjourney and DALL-E, as well as text models like ChatGPT and Claude.",
    },
    {
        q: "Are my prompts saved?",
        a: "No. All generation happens locally or without saving history. Your ideas remain completely private.",
    },
];

const howToSteps = [
    {
        title: "Select your AI model",
        desc: "Choose whether you are generating a prompt for an image generator (like Midjourney) or a text assistant (like ChatGPT).",
    },
    {
        title: "Enter your core idea",
        desc: "Type a few words describing what you want to create or achieve.",
    },
    {
        title: "Generate & copy",
        desc: "Click generate to instantly receive a detailed, highly optimized prompt. Copy it with one click.",
    },
];

// Related tools = all tools except this one
const relatedTools = tools.filter((t) => t.href !== "/ai-prompt-generator");

export default function AiPromptGeneratorPage() {
    return (
        <>


            {/* HERO */}
            <header className="tool-page-hero">
                <div className="container">
                    <Link href="/" className="tool-page-badge">
                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to all tools
                    </Link>
                    <h1 className="tool-page-title">AI Prompt Generator</h1>
                    <p className="tool-page-desc">
                        Generate highly optimized prompts for Midjourney, ChatGPT, and more — free, no account required.
                    </p>
                    <div className="tool-page-trust">
                        {["Free forever", "No signup needed", "Optimized output", "Instant generation"].map((t) => (
                            <div className="tool-trust-item" key={t}>
                                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                {t}
                            </div>
                        ))}
                    </div>
                </div>
            </header>

            {/* AD SLOT — TOP */}
            <div className="container" style={{ paddingTop: "1.5rem" }}>
                <div className="ad-slot">Advertisement</div>
            </div>

            {/* TOOL UI */}
            <div className="tool-ui-section">
                <div className="container">
                    <div className="tool-ui-box">
                        {/* ── REPLACE THIS with your actual tool component ── */}
                        <div className="tool-ui-placeholder">
                            <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316V18" />
                            </svg>
                            <p>Enter your idea to generate a prompt</p>
                        </div>
                        {/* ──────────────────────────────────────────────── */}
                    </div>
                </div>
            </div>

            {/* SEO CONTENT */}
            <section>
                <div className="container">
                    <div className="section">
                        <div className="section-header">
                            <span className="section-label">About This Tool</span>
                            <h2 className="section-title">What is an AI Prompt Generator?</h2>
                        </div>
                        <div className="seo-body">
                            <p>
                                Writing the perfect prompt for AI models like Midjourney or ChatGPT can be difficult. 
                                Our AI Prompt Generator takes your basic idea and expands it into a highly detailed, 
                                optimized prompt that guarantees better results from the AI.
                            </p>
                            <p>
                                Whether you are an artist looking for specific lighting and camera angles in Midjourney, 
                                or a writer needing a structured persona for ChatGPT, this tool does the heavy lifting for you.
                            </p>
                            <p>
                                Simply type in your core concept, and instantly receive a professional-grade prompt ready 
                                to be copied and pasted.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW TO USE */}
            <div style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
                <div className="container">
                    <div className="section">
                        <div className="section-header">
                            <span className="section-label">Guide</span>
                            <h2 className="section-title">How to generate an AI prompt</h2>
                        </div>
                        <ol className="how-steps">
                            {howToSteps.map((step, i) => (
                                <li key={step.title} className="how-step">
                                    <span className="how-step-num">{i + 1}</span>
                                    <div className="how-step-content">
                                        <h3>{step.title}</h3>
                                        <p>{step.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>

            {/* AD SLOT — MIDDLE */}
            <div className="container" style={{ paddingTop: "3rem" }}>
                <div className="ad-slot">Advertisement</div>
            </div>

            {/* FAQ */}
            <section aria-labelledby="faq-heading">
                <div className="container">
                    <div className="section">
                        <div className="section-header">
                            <span className="section-label">FAQ</span>
                            <h2 id="faq-heading" className="section-title">Frequently asked questions</h2>
                        </div>
                        <dl className="faq-list">
                            {faqs.map((faq) => (
                                <div key={faq.q} className="faq-item">
                                    <dt className="faq-q">{faq.q}</dt>
                                    <dd className="faq-a">{faq.a}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>

            {/* RELATED TOOLS */}
            <section style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="section" style={{ paddingTop: 0 }}>
                        <div className="section-header">
                            <span className="section-label">More Tools</span>
                            <h2 className="section-title">You might also like</h2>
                        </div>
                        <ul className="related-grid">
                            {relatedTools.map((tool) => (
                                <li key={tool.href}>
                                    <Link href={tool.href} className="related-card">
                                        <div className="related-icon" style={{ color: tool.accent }}>
                                            {tool.icon}
                                        </div>
                                        <div>
                                            <p className="related-name">{tool.title}</p>
                                            <p className="related-desc">{tool.description}</p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* AD SLOT — BOTTOM */}
            <div className="container" style={{ paddingBottom: "3rem" }}>
                <div className="ad-slot">Advertisement</div>
            </div>


        </>
    );
}