import type { Metadata } from "next";
import Link from "next/link";
import WritingAssistant from "@/components/WritingAssistant";

export const metadata: Metadata = {
    title: "AI Caption Generator — Free Social Media Captions | Zehbee",
    description: "Generate highly engaging, emoji-rich captions for Instagram, Twitter, and LinkedIn. Free AI caption generator online.",
    alternates: { canonical: "https://zehbee.com/ai-caption-generator" },
};

export default function AiCaptionGeneratorPage() {
    return (
        <>
            <header className="hero" style={{ paddingBottom: "2rem" }}>
                <h1>AI Caption Generator</h1>
                <p className="hero-sub">Generate smart, engaging captions with relevant emojis and hashtags instantly.</p>
            </header>

            <div className="container" style={{ paddingBottom: "4rem" }}>
                <WritingAssistant initialMode="caption" />
            </div>

            <section className="seo-section">
                <div className="container">
                    <div className="seo-inner">
                        <div className="seo-body">
                            <h2 className="seo-title">Stop struggling with social media captions</h2>
                            <p>
                                You have the perfect photo or the ideal thought to share, but writer's block strikes when it's time to write the caption. Zehbee's free AI Caption Generator is designed to eliminate this friction. Just type a few words about your topic, and our algorithm instantly crafts multiple highly-engaging caption options.
                            </p>
                            <p>
                                A great caption doesn't just describe an image; it drives engagement, encourages comments, and expands your reach through proper hashtag usage. Our generated captions come pre-formatted with popular emojis and dynamic hashtags based on your topic.
                            </p>
                            
                            <h3 style={{ marginTop: "2rem", marginBottom: "1rem", fontSize: "1.25rem", color: "var(--text-primary)" }}>Works seamlessly across platforms:</h3>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <li><strong>Instagram:</strong> Perfect mix of aesthetic spacing, emojis, and hashtags.</li>
                                <li><strong>Twitter / X:</strong> Short, punchy, and designed to drive conversation.</li>
                                <li><strong>LinkedIn:</strong> Professional yet engaging setups for networking.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
