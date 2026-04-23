import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/lib/data";

export const metadata: Metadata = {
    title: "Free Watermark Remover Online — No Signup | Zehbee",
    description: "Remove watermarks from any image instantly and for free. No account needed, works directly in your browser. Clean results in seconds.",
    alternates: { canonical: "https://zehbee.com/watermark-remover" },
    openGraph: {
        title: "Free Watermark Remover — Zehbee",
        description: "Remove watermarks from images instantly. Free, no signup, browser-based.",
        url: "https://zehbee.com/watermark-remover",
        siteName: "Zehbee",
        type: "website",
    },
};

const faqs = [
    {
        q: "Is this watermark remover really free?",
        a: "Yes — 100% free, no hidden fees, no account required. You can use it as many times as you want.",
    },
    {
        q: "What image formats does it support?",
        a: "The tool supports JPG, PNG, WEBP, and most common image formats. Simply upload your image and the watermark will be removed.",
    },
    {
        q: "Will the image quality be affected?",
        a: "No. The tool is designed to preserve the original image quality while removing the watermark cleanly.",
    },
    {
        q: "Are my images stored on your servers?",
        a: "No. All processing happens directly in your browser. Your images are never uploaded to or stored on any server.",
    },
];

const howToSteps = [
    {
        title: "Upload your image",
        desc: "Click the upload area or drag and drop your image file. Supports JPG, PNG, WEBP and more.",
    },
    {
        title: "Select the watermark area",
        desc: "Use the selection tool to highlight the watermark you want removed from your image.",
    },
    {
        title: "Remove & download",
        desc: "Click Remove Watermark and download your clean image instantly — no waiting, no signup.",
    },
];

// Related tools = all tools except this one
const relatedTools = tools.filter((t) => t.href !== "/watermark-remover").slice(0, 4);

export default function WatermarkRemoverPage() {
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
                    <h1 className="tool-page-title">Watermark Remover</h1>
                    <p className="tool-page-desc">
                        Remove watermarks from any image instantly — free, no account required, and
                        your files never leave your browser.
                    </p>
                    <div className="tool-page-trust">
                        {["Free forever", "No signup needed", "Browser-based", "No file uploads"].map((t) => (
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
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            <p>Drag & drop your image here, or click to upload</p>
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
                            <h2 className="section-title">What is a Watermark Remover?</h2>
                        </div>
                        <div className="seo-body" style={{ maxWidth: 720 }}>
                            <p>
                                A watermark remover is a tool that lets you cleanly erase watermarks, logos,
                                or text overlays from images without affecting the rest of the photo. This is
                                useful when you have licensed images you own, screenshots, or photos where the
                                watermark is distracting or unnecessary.
                            </p>
                            <p>
                                Zehbee&apos;s Watermark Remover works entirely in your browser using smart inpainting
                                technology. The surrounding pixels are analyzed and the watermark region is filled
                                in intelligently — giving you a clean, natural-looking result.
                            </p>
                            <p>
                                Unlike desktop software, there&apos;s nothing to install. Just open this page, upload
                                your image, select the watermark area, and download your clean result in seconds.
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
                            <h2 className="section-title">How to remove a watermark</h2>
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