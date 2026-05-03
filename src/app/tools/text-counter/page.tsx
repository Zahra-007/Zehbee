import { Metadata } from "next";
import TextCounter from "@/components/TextCounter";

export const metadata: Metadata = {
    title: "Word & Text Counter - Free Online Tool",
    description: "Real-time word, character, and sentence counting utility. Analyze your text instantly in the browser.",
};

export default function TextCounterPage() {
    return (
        <main className="container section">
            <div className="tool-page-hero">
                <div className="tool-page-badge">100% Private Client-Side Processing</div>
                <h1 className="tool-page-title">Text Counter</h1>
                <p className="tool-page-desc">
                    Instantly analyze your text. Count words, characters, sentences, and estimate reading time.
                </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
                <TextCounter />
            </div>
            
            <section className="seo-section">
                <div className="seo-inner" style={{ display: "block" }}>
                    <div className="seo-body">
                        <h2 className="seo-title">Why Use a Text Counter?</h2>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-2)', marginBottom: '2rem' }}>
                            Whether you&apos;re writing an essay, a tweet, or a blog post, keeping track of your text length is crucial. Many platforms impose strict character limits (like Twitter&apos;s 280 characters or SEO meta descriptions at 160 characters). Our real-time text counter helps you stay within these boundaries effortlessly.
                        </p>
                        
                        <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Features Included</h3>
                        <ul className="how-steps" style={{ marginBottom: "3rem" }}>
                            <li className="how-step" style={{ padding: '1.5rem' }}>
                                <div className="how-step-content">
                                    <h3 style={{ fontSize: '1.1rem' }}>Word & Character Count</h3>
                                    <p>Get precise counts of total words and characters, including a specialized count excluding spaces.</p>
                                </div>
                            </li>
                            <li className="how-step" style={{ padding: '1.5rem' }}>
                                <div className="how-step-content">
                                    <h3 style={{ fontSize: '1.1rem' }}>Sentence & Paragraph Tracking</h3>
                                    <p>Understand your text structure by tracking the exact number of sentences and paragraphs.</p>
                                </div>
                            </li>
                            <li className="how-step" style={{ padding: '1.5rem' }}>
                                <div className="how-step-content">
                                    <h3 style={{ fontSize: '1.1rem' }}>Reading Time Estimation</h3>
                                    <p>Automatically calculates the estimated time it will take an average reader to finish your text.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
