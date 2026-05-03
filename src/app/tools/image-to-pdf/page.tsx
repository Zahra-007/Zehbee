import { Metadata } from "next";
import ImageToPdf from "@/components/ImageToPdf";

export const metadata: Metadata = {
    title: "Image to PDF Converter - Free Online Tool",
    description: "Convert multiple images into a single PDF document. Drag and drop to reorder. 100% private client-side processing.",
};

export default function ImageToPdfPage() {
    return (
        <main className="container section">
            <div className="tool-page-hero">
                <div className="tool-page-badge">100% Private Client-Side Processing</div>
                <h1 className="tool-page-title">Image to PDF</h1>
                <p className="tool-page-desc">
                    Convert multiple images into a single high-quality PDF document instantly.
                </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
                <ImageToPdf />
            </div>
            
            <section className="seo-section">
                <div className="seo-inner" style={{ display: "block" }}>
                    <div className="seo-body">
                        <h2 className="seo-title">How to Convert Images to PDF</h2>
                        <ul className="how-steps" style={{ marginBottom: "3rem" }}>
                            <li className="how-step">
                                <span className="how-step-num">1</span>
                                <div className="how-step-content">
                                    <h3>Upload Images</h3>
                                    <p>Select multiple images (JPEG, PNG, WEBP) from your device.</p>
                                </div>
                            </li>
                            <li className="how-step">
                                <span className="how-step-num">2</span>
                                <div className="how-step-content">
                                    <h3>Reorder Pages</h3>
                                    <p>Use the up and down arrows to arrange the images in the desired order.</p>
                                </div>
                            </li>
                            <li className="how-step">
                                <span className="how-step-num">3</span>
                                <div className="how-step-content">
                                    <h3>Generate PDF</h3>
                                    <p>Click the download button to instantly generate your PDF document.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
