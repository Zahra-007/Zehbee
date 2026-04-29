import { Metadata } from "next";
import ImageOptimizer from "@/components/ImageOptimizer";
import FaqList from "@/components/FaqList";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
    title: "Compress Image Online - Free Image Optimizer Without Losing Quality",
    description: "Compress JPEG, PNG, and WebP images online for free. Reduce file size instantly in your browser without losing quality. 100% private, no uploads.",
};

export default function CompressImagePage() {
    return (
        <>
            <section className="hero">
                <div className="hero-badge">
                    <span className="hero-badge-dot"></span>
                    100% Private Client-Side Processing
                </div>
                <h1>Compress Image <em>Online</em></h1>
                <p className="hero-sub">
                    Reduce your image file sizes instantly without losing quality. Optimize for faster web loading.
                </p>
            </section>

            <ImageOptimizer defaultTab="compress" />

            <section className="seo-section">
                <div className="container">
                    <div className="seo-inner" style={{ display: "block" }}>
                        <div className="seo-body">
                            <h2 className="seo-title">Free Online Image Compressor</h2>
                            <p>
                                In today's fast-paced digital world, website speed is critical. Heavy, unoptimized images are the number one cause of slow-loading websites. Our <strong>free online image compressor</strong> helps you reduce image file sizes drastically without compromising on visual quality. Whether you are a photographer, web developer, or just someone looking to save space on your device, this tool is designed for you.
                            </p>
                            
                            <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>Why Compress Images?</h3>
                            <p>
                                Compressing images is a crucial step in Web Optimization. Search engines like Google prioritize fast-loading websites in their rankings. By compressing your images:
                            </p>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", lineHeight: "1.8", color: "var(--text-2)" }}>
                                <li><strong>Faster Load Times:</strong> Smaller file sizes mean your web pages load instantly, providing a better user experience.</li>
                                <li><strong>Improved SEO:</strong> Page speed is a direct ranking factor. Optimized images help you rank higher on search engines.</li>
                                <li><strong>Lower Bandwidth Costs:</strong> Serving smaller images reduces bandwidth usage, saving you money on hosting.</li>
                                <li><strong>Better User Retention:</strong> Users bounce if a site takes too long to load. Fast images keep your audience engaged.</li>
                            </ul>

                            <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>How Does the Image Compressor Work?</h3>
                            <p>
                                Our image compressor uses advanced algorithms via your browser's native capabilities to intelligently reduce the file size. When you upload an image, the tool analyzes it and removes unnecessary metadata, while optimizing the pixel data. 
                            </p>
                            <p>
                                The best part? <strong>Everything happens in your browser.</strong> Your images are never uploaded to our servers. This ensures your data remains 100% private and secure, and processing is lightning fast since there is no server upload/download delay.
                            </p>

                            <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>Supported Formats</h3>
                            <p>
                                We support the most common web image formats:
                            </p>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", lineHeight: "1.8", color: "var(--text-2)" }}>
                                <li><strong>JPEG / JPG:</strong> The standard format for photographs. Our tool applies intelligent lossy compression to JPEGs.</li>
                                <li><strong>PNG:</strong> Great for graphics with transparent backgrounds. We optimize PNGs to retain transparency while reducing bulk.</li>
                                <li><strong>WebP:</strong> The modern web standard. Even if your image is already WebP, we can compress it further.</li>
                            </ul>

                            <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>Step-by-Step Guide to Compress an Image</h3>
                            <ol style={{ paddingLeft: "1.5rem", marginBottom: "2.5rem", lineHeight: "1.8", color: "var(--text-2)" }}>
                                <li><strong>Upload your image:</strong> Drag and drop your image into the upload area above, or click to browse your files.</li>
                                <li><strong>Adjust Quality:</strong> Use the quality slider to find the perfect balance between file size and visual fidelity. (80% is a great starting point).</li>
                                <li><strong>Preview:</strong> Check the real-time preview to ensure the image still looks great.</li>
                                <li><strong>Download:</strong> Click the download button to save your newly optimized image. We even provide SEO-friendly filenames!</li>
                            </ol>

                            <hr style={{ borderTop: "1px solid var(--border)", margin: "3rem 0" }} />

                            <h2 className="seo-title">Frequently Asked Questions</h2>
                            <FaqList faqs={faqs} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
