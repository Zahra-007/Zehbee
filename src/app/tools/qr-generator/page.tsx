import { Metadata } from "next";
import QrGenerator from "@/components/QrGenerator";

export const metadata: Metadata = {
    title: "QR Code Generator - Free Online Tool",
    description: "Generate customized QR codes instantly from text or URLs. Adjust colors, size, and download as PNG. 100% private client-side processing.",
};

export default function QrGeneratorPage() {
    return (
        <main className="container section">
            <div className="tool-page-hero">
                <div className="tool-page-badge">100% Private Client-Side Processing</div>
                <h1 className="tool-page-title">QR Code Generator</h1>
                <p className="tool-page-desc">
                    Create customized QR codes instantly from text or URLs. Adjust colors, size, and download as PNG.
                </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
                <QrGenerator />
            </div>
            
            <section className="seo-section">
                <div className="seo-inner" style={{ display: "block" }}>
                    <div className="seo-body">
                        <h2 className="seo-title">How to Generate a QR Code</h2>
                        <ul className="how-steps" style={{ marginBottom: "3rem" }}>
                            <li className="how-step">
                                <span className="how-step-num">1</span>
                                <div className="how-step-content">
                                    <h3>Enter URL or Text</h3>
                                    <p>Type or paste the URL or text you want the QR code to point to. The code updates instantly.</p>
                                </div>
                            </li>
                            <li className="how-step">
                                <span className="how-step-num">2</span>
                                <div className="how-step-content">
                                    <h3>Customize Design</h3>
                                    <p>Adjust the foreground and background colors, and set the perfect size for your needs.</p>
                                </div>
                            </li>
                            <li className="how-step">
                                <span className="how-step-num">3</span>
                                <div className="how-step-content">
                                    <h3>Download PNG</h3>
                                    <p>Click download to save your custom QR code as a high-quality PNG image.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
