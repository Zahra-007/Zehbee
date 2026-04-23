import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/lib/data";

export const metadata: Metadata = {
    title: "Free Image Converter Online — PNG, JPG, WEBP | Zehbee",
    description: "Convert images between PNG, JPG, WEBP and more formats instantly. Free, no signup, works directly in your browser.",
    alternates: { canonical: "https://zehbee.com/image-converter" },
    openGraph: {
        title: "Free Image Converter — Zehbee",
        description: "Convert images between PNG, JPG, WEBP and more — free, no signup.",
        url: "https://zehbee.com/image-converter",
        siteName: "Zehbee",
        type: "website",
    },
};

const faqs = [
    {
        q: "Which image formats are supported?",
        a: "You can convert between PNG, JPG, JPEG, WEBP, GIF, and BMP. More formats are being added regularly.",
    },
    {
        q: "Does converting affect image quality?",
        a: "For lossless formats like PNG, quality is fully preserved. For JPG/WEBP you can choose the quality level before downloading.",
    },
    {
        q: "Is there a file size limit?",
        a: "No file size limit. The tool runs in your browser so your files are never uploaded to any server.",
    },
    {
        q: "Can I convert multiple images at once?",
        a: "Yes — you can upload and convert multiple images in one go and download them all as a ZIP file.",
    },
];

const howToSteps = [
    {
        title: "Upload your image",
        desc: "Click the upload area or drag and drop one or more image files into the tool.",
    },
    {
        title: "Choose output format",
        desc: "Select the format you want to convert to — PNG, JPG, WEBP, or others.",
    },
    {
        title: "Convert & download",
        desc: "Click Convert and download your new image instantly. No waiting, no account needed.",
    },
];

const relatedTools = tools.filter((t) => t.href !== "/image-converter");

export default function ImageConverterPage() {
    return (
        <>


            <header className="tool-page-hero">
                <div className="container">
                    <Link href="/" className="tool-page-badge">
                        <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to all tools
                    </Link>
                    <h1 className="tool-page-title">Image Converter</h1>
                    <p className="tool-page-desc">
                        Convert images between PNG, JPG, WEBP, and more formats in seconds —
                        free, no account required, nothing uploaded to any server.
                    </p>
                    <div className="tool-page-trust">
                        {["Free forever", "No signup needed", "Multiple formats", "Batch convert"].map((t) => (
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

            <div className="container" style={{ paddingTop: "1.5rem" }}>
                <div className="ad-slot">Advertisement</div>
            </div>

            <div className="tool-ui-section">
                <div className="container">
                    <div className="tool-ui-box">
                        <div className="tool-ui-placeholder">
                            <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                            <p>Upload an image to convert it to your chosen format</p>
                        </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="section">
                        <div className="section-header">
                            <span className="section-label">About This Tool</span>
                            <h2 className="section-title">What is an Image Converter?</h2>
                        </div>
                        <div className="seo-body" style={{ maxWidth: 720 }}>
                            <p>
                                An image converter lets you change the file format of an image — for example,
                                converting a PNG to a JPG, or a JPG to a WEBP. Different formats have different
                                advantages: WEBP is best for web performance, PNG preserves transparency, and JPG
                                is the most universally compatible format.
                            </p>
                            <p>
                                Zehbee&apos;s Image Converter handles everything in your browser. There&apos;s no upload,
                                no server processing, and no waiting. Your images stay completely private.
                            </p>
                            <p>
                                Whether you&apos;re a web developer optimizing images for performance, a designer
                                exporting for different platforms, or just need to change a format quickly —
                                this tool gets it done in seconds.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
                <div className="container">
                    <div className="section">
                        <div className="section-header">
                            <span className="section-label">Guide</span>
                            <h2 className="section-title">How to convert an image</h2>
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

            <div className="container" style={{ paddingTop: "3rem" }}>
                <div className="ad-slot">Advertisement</div>
            </div>

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
                                        <div className="related-icon" style={{ color: tool.accent }}>{tool.icon}</div>
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

            <div className="container" style={{ paddingBottom: "3rem" }}>
                <div className="ad-slot">Advertisement</div>
            </div>


        </>
    );
}