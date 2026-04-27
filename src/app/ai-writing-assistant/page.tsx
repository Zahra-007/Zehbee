import type { Metadata } from "next";
import Link from "next/link";
import WritingAssistant from "@/components/WritingAssistant";
import { tools, faqs } from "@/lib/data";

export const metadata: Metadata = {
    title: "Zehbee AI Writing Assistant — Free Text & Tone Generator",
    description: "A free AI writing assistant to rewrite text, change tones, generate captions, and write prompts. No signup required. Fast, free, and secure.",
    alternates: { canonical: "https://zehbee.com/ai-writing-assistant" },
    openGraph: {
        title: "Zehbee AI Writing Assistant",
        description: "Your free, fast, browser-based AI writing companion.",
        url: "https://zehbee.com/ai-writing-assistant",
        siteName: "Zehbee",
        type: "website",
    },
};

export default function AiWritingAssistantPage() {
    return (
        <>
            {/* HERO */}
            <header className="hero">
                <div className="hero-badge">
                    <span className="hero-badge-dot" />
                    No Signup • 100% Free
                </div>
                <h1>
                    Zehbee AI Writing Assistant<br />
                    <em>Rewrite, Improve, Generate</em>
                </h1>
                <p className="hero-sub">
                    A free, zero-setup AI writing companion. Instantly rewrite paragraphs, change text tones, craft social media captions, and build prompts directly in your browser.
                </p>
                <div className="hero-actions">
                    <Link href="#tool" className="btn-primary">
                        Start Writing Now
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </Link>
                </div>
            </header>

            {/* TRUST BAR */}
            <div className="trust-bar">
                {["100% Free to use", "No account required", "Instant processing", "Browser-based privacy"].map((t) => (
                    <div className="trust-item" key={t}>
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {t}
                    </div>
                ))}
            </div>

            {/* MAIN TOOL AREA */}
            <div id="tool" className="container" style={{ padding: "4rem 1.5rem" }}>
                <WritingAssistant initialMode="rewrite" />
            </div>

            {/* SEO CONTENT */}
            <section className="seo-section">
                <div className="container">
                    <div className="seo-inner">
                        <div className="seo-body">
                            <h2 className="seo-title">What is the Zehbee AI Writing Assistant?</h2>
                            <p>
                                The Zehbee AI Writing Assistant is a comprehensive, free tool designed to help you communicate better and faster. Whether you are drafting a professional email, creating a post for Instagram, or trying to engineer the perfect Midjourney prompt, Zehbee provides the utilities you need without the hassle of subscriptions or complex interfaces.
                            </p>
                            <p>
                                Unlike heavy AI applications, our tool runs entirely within your browser using optimized, rule-based algorithms. This guarantees instant results and absolute privacy—your text never leaves your device.
                            </p>
                            <h3 style={{ marginTop: "2rem", marginBottom: "1rem", fontSize: "1.25rem", color: "var(--text-primary)" }}>Four Powerful Modes</h3>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <li><strong>Rewrite Text:</strong> Improve the clarity and flow of your existing sentences. Fix capitalization and upgrade vocabulary instantly.</li>
                                <li><strong>Tone Changer:</strong> Need to sound more formal for your boss or casual for a friend? Seamlessly shift your text's tone.</li>
                                <li><strong>Caption Generator:</strong> Never stare at a blank screen again. Generate engaging social media captions with targeted emojis and hashtags.</li>
                                <li><strong>Prompt Generator:</strong> Our famous AI Prompt Generator lets you create highly optimized inputs for ChatGPT, Midjourney, and Stable Diffusion.</li>
                            </ul>
                        </div>
                        <div className="seo-stats">
                            <div className="seo-stat">
                                <div className="seo-stat-num">Fast</div>
                                <div className="seo-stat-label">Zero-latency processing</div>
                            </div>
                            <div className="seo-stat">
                                <div className="seo-stat-num">Safe</div>
                                <div className="seo-stat-label">No external API calls</div>
                            </div>
                            <div className="seo-stat">
                                <div className="seo-stat-num">Free</div>
                                <div className="seo-stat-label">Unlimited usage forever</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* QUICK TOOLS GRID */}
            <section aria-labelledby="tools-heading">
                <div className="container">
                    <div className="section">
                        <div className="section-header">
                            <span className="section-label">Features</span>
                            <h2 id="tools-heading" className="section-title">Explore specific modes</h2>
                        </div>
                        <ul className="tools-grid">
                            {tools.map((tool) => (
                                <li key={tool.href}>
                                    <Link href={tool.href} className="tool-card">
                                        <div className="tool-card-top">
                                            <div className="tool-icon-wrap" style={{ color: tool.accent }}>
                                                {tool.icon}
                                            </div>
                                            <span className="tool-arrow" aria-hidden="true">
                                                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div>
                                            <p className="tool-tag">{tool.category}</p>
                                            <p className="tool-name">{tool.title}</p>
                                        </div>
                                        <p className="tool-desc">{tool.description}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section aria-labelledby="faq-heading">
                <div className="container">
                    <div className="section">
                        <div className="section-header">
                            <span className="section-label">FAQ</span>
                            <h2 id="faq-heading" className="section-title">Frequently asked questions</h2>
                        </div>
                        <div className="faq-list">
                            {faqs.map((faq) => (
                                <details key={faq.q} className="faq-item">
                                    <summary className="faq-q">
                                        {faq.q}
                                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="faq-a">{faq.a}</div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
