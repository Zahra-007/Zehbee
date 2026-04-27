import type { Metadata } from "next";
import Link from "next/link";
import WritingAssistant from "@/components/WritingAssistant";

export const metadata: Metadata = {
    title: "Tone Changer Tool — Make Text Formal or Casual | Zehbee",
    description: "Easily change the tone of your writing to formal, casual, persuasive, or confident. Free online tone changer.",
    alternates: { canonical: "https://zehbee.com/tone-changer-tool" },
};

export default function ToneChangerToolPage() {
    return (
        <>
            <header className="hero" style={{ paddingBottom: "2rem" }}>
                <h1>Tone Changer Tool</h1>
                <p className="hero-sub">Adjust your writing tone to be more formal, casual, persuasive, or confident.</p>
            </header>

            <div className="container" style={{ paddingBottom: "4rem" }}>
                <WritingAssistant initialMode="tone" />
            </div>

            <section className="seo-section">
                <div className="container">
                    <div className="seo-inner">
                        <div className="seo-body">
                            <h2 className="seo-title">How the Tone Changer works</h2>
                            <p>
                                Sometimes you know exactly what you want to say, but you don't know exactly <em>how</em> to say it. That's where the Zehbee Tone Changer Tool comes in. By using intelligent dictionary-based word swapping and structural adjustments, this tool instantly alters the mood and voice of your text.
                            </p>
                            <p>
                                If you have drafted a quick, casual message but need to send it to your manager, simply select "Formal" and watch the vocabulary transform into professional corporate communication. Need to convince a customer? The "Persuasive" mode injects confidence and strong action verbs into your copy.
                            </p>
                            
                            <h3 style={{ marginTop: "2rem", marginBottom: "1rem", fontSize: "1.25rem", color: "var(--text-primary)" }}>Available Tones</h3>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <li><strong>Formal:</strong> Replaces casual slang with professional, business-appropriate terminology.</li>
                                <li><strong>Casual:</strong> Loosens up strict formatting for friendly, everyday conversation.</li>
                                <li><strong>Persuasive:</strong> Enhances the text with confident, commanding language to drive action.</li>
                                <li><strong>Confident:</strong> Removes doubt and filler words to present your ideas with authority.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
