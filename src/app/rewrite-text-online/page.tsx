import type { Metadata } from "next";
import Link from "next/link";
import WritingAssistant from "@/components/WritingAssistant";

export const metadata: Metadata = {
    title: "Rewrite Text Online — Free Paragraph Rephraser | Zehbee",
    description: "Instantly rewrite text online for free. Improve clarity, fix grammar, and upgrade your vocabulary without signing up.",
    alternates: { canonical: "https://zehbee.com/rewrite-text-online" },
};

export default function RewriteTextOnlinePage() {
    return (
        <>
            <header className="hero" style={{ paddingBottom: "2rem" }}>
                <h1>Rewrite Text Online</h1>
                <p className="hero-sub">Improve clarity, fix grammar, and upgrade your vocabulary instantly for free.</p>
            </header>

            <div className="container" style={{ paddingBottom: "4rem" }}>
                <WritingAssistant initialMode="rewrite" />
            </div>

            <section className="seo-section">
                <div className="container">
                    <div className="seo-inner">
                        <div className="seo-body">
                            <h2 className="seo-title">Why use our text rewriter?</h2>
                            <p>
                                Writing is hard, but editing doesn't have to be. Our free text rewriter analyzes your paragraphs and instantly suggests improvements. Whether you want to fix simple capitalization errors or completely upgrade your vocabulary, the Zehbee rewriting tool handles it seamlessly in your browser.
                            </p>
                            <p>
                                Many online rewriters require you to sign up or pay a premium subscription. Zehbee's philosophy is different: we provide powerful, rule-based text optimization 100% free of charge. No daily limits, no annoying popups, and complete privacy since the text never leaves your local device.
                            </p>
                            
                            <h3 style={{ marginTop: "2rem", marginBottom: "1rem", fontSize: "1.25rem", color: "var(--text-primary)" }}>Perfect For:</h3>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <li><strong>Students:</strong> Rephrase essays and improve academic tone.</li>
                                <li><strong>Professionals:</strong> Polish emails and business proposals before hitting send.</li>
                                <li><strong>Bloggers:</strong> Ensure your articles read smoothly and maintain strong vocabulary.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
