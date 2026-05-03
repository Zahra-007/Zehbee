import { Metadata } from "next";
import PdfToImage from "@/components/PdfToImage";

export const metadata: Metadata = {
    title: "PDF to Image Converter - Free Online Tool",
    description: "Extract pages from a PDF document and save them as high-quality images. Download individually or as a ZIP. 100% private client-side processing.",
};

export default function PdfToImagePage() {
    return (
        <main className="container section">
            <div className="tool-page-hero">
                <div className="tool-page-badge">100% Private Client-Side Processing</div>
                <h1 className="tool-page-title">PDF to Image</h1>
                <p className="tool-page-desc">
                    Extract pages from your PDF documents and save them as high-quality JPEG images instantly.
                </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
                <PdfToImage />
            </div>
            
            <section className="seo-section">
                <div className="seo-inner" style={{ display: "block" }}>
                    <div className="seo-body">
                        <h2 className="seo-title">How to Extract Images from PDF</h2>
                        <ul className="how-steps" style={{ marginBottom: "3rem" }}>
                            <li className="how-step">
                                <span className="how-step-num">1</span>
                                <div className="how-step-content">
                                    <h3>Upload PDF</h3>
                                    <p>Select a PDF document from your device. Processing happens securely in your browser.</p>
                                </div>
                            </li>
                            <li className="how-step">
                                <span className="how-step-num">2</span>
                                <div className="how-step-content">
                                    <h3>Extract Pages</h3>
                                    <p>Our tool instantly renders each page of your PDF into a high-quality image.</p>
                                </div>
                            </li>
                            <li className="how-step">
                                <span className="how-step-num">3</span>
                                <div className="how-step-content">
                                    <h3>Download Images</h3>
                                    <p>Download individual pages or get all pages at once in a convenient ZIP file.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
