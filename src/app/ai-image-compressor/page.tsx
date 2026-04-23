import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/lib/data";

export const metadata: Metadata = {
    title: "Free AI Image Compressor Online — No Signup | Zehbee",
    description: "Smartly compress your images while keeping high quality using AI algorithms. Free, no account needed, browser-based.",
    alternates: { canonical: "https://zehbee.com/ai-image-compressor" },
    openGraph: {
        title: "Free AI Image Compressor — Zehbee",
        description: "Compress images with AI without losing quality. Free, no signup, browser-based.",
        url: "https://zehbee.com/ai-image-compressor",
        siteName: "Zehbee",
        type: "website",
    },
};

const faqs = [
    {
        q: "Is this AI image compressor really free?",
        a: "Yes — 100% free, no hidden fees, no account required. Compress as many images as you want.",
    },
    {
        q: "What makes it an 'AI' compressor?",
        a: "Our tool uses smart algorithms to analyze the image and strategically reduce data where the human eye won't notice, maintaining high perceived quality at much smaller file sizes.",
    },
    {
        q: "Are my images safe?",
        a: "Absolutely. All processing happens locally. Your images are never stored on any server.",
    },
];

const howToSteps = [
    {
        title: "Upload your image",
        desc: "Click the upload area or drag and drop your image file. We support JPG, PNG, and WEBP.",
    },
    {
        title: "Select compression level",
        desc: "Choose your desired balance between file size reduction and image quality.",
    },
    {
        title: "Compress & download",
        desc: "Click Compress and download your optimized image instantly. Compare before and after results.",
    },
];

// Related tools = all tools except this one
const relatedTools = tools.filter((t) => t.href !== "/ai-image-compressor");

export default function AiImageCompressorPage() {
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
                    <h1 className="tool-page-title">AI Image Compressor</h1>
                    <p className="tool-page-desc">
                        Smartly compress your images while keeping high quality using AI algorithms — completely free.
                    </p>
                    <div className="tool-page-trust">
                        {["Free forever", "No signup needed", "Smart compression", "Browser-based"].map((t) => (
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
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                            </svg>
                            <p>Drag & drop your image to compress</p>
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
                            <h2 className="section-title">What is an AI Image Compressor?</h2>
                        </div>
                        <div className="seo-body">
                            <p>
                                Large image files slow down websites, take up too much storage space, and are hard to share. 
                                Our AI Image Compressor intelligently reduces the file size of your images without making them look pixelated or blurry.
                            </p>
                            <p>
                                Zehbee uses smart compression algorithms that identify and remove unnecessary data from your images 
                                while preserving the details that matter most to the human eye. This means you get a much smaller file 
                                with virtually no noticeable difference in quality.
                            </p>
                            <p>
                                Everything is processed securely in your browser. Just upload your image, and let the tool do the rest.
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
                            <h2 className="section-title">How to compress an image</h2>
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