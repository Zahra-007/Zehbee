import { Metadata } from "next";
import ImageOptimizer from "@/components/ImageOptimizer";
import FaqList from "@/components/FaqList";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
    title: "Convert Image to WebP - Free Online Converter",
    description: "Convert JPG and PNG images to WebP format instantly in your browser. Improve your website speed and SEO with next-gen image formats. 100% free and private.",
};

export default function ConvertImagePage() {
    return (
        <>
            <section className="hero">
                <div className="hero-badge">
                    <span className="hero-badge-dot"></span>
                    100% Private Client-Side Processing
                </div>
                <h1>Convert Image <em>Format</em></h1>
                <p className="hero-sub">
                    Easily convert your images to WebP, JPG, or PNG. Modernize your assets for the web.
                </p>
            </section>

            <ImageOptimizer defaultTab="convert" />

            <section className="seo-section">
                <div className="container">
                    <div className="seo-inner" style={{ display: "block" }}>
                        <div className="seo-body">
                            <h2 className="seo-title">Free Online Image Format Converter</h2>
                            <p>
                                Having your images in the right format is essential for web performance, compatibility, and quality. Our <strong>free online image converter</strong> allows you to seamlessly switch between popular image formats like JPEG, PNG, and WebP entirely within your browser. No software installation, no server uploads, and no waiting.
                            </p>
                            
                            <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>Why Convert Images to WebP?</h3>
                            <p>
                                WebP is a modern image format developed by Google that provides superior lossless and lossy compression for images on the web. Converting your legacy JPEGs and PNGs to WebP has massive benefits:
                            </p>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", lineHeight: "1.8", color: "var(--text-2)" }}>
                                <li><strong>Massive Size Reduction:</strong> WebP lossless images are 26% smaller in size compared to PNGs. WebP lossy images are 25-34% smaller than comparable JPEG images.</li>
                                <li><strong>Maintains Quality:</strong> You get significantly smaller file sizes without noticeable degradation in visual quality.</li>
                                <li><strong>Supports Transparency:</strong> Unlike JPEG, WebP supports alpha channel transparency (like PNG) while keeping the file size tiny.</li>
                                <li><strong>SEO Boost:</strong> Google Lighthouse and PageSpeed Insights explicitly recommend serving images in next-gen formats like WebP.</li>
                            </ul>

                            <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>Converting PNG to JPG</h3>
                            <p>
                                While PNG is great for graphics with transparent backgrounds, it often creates huge file sizes for standard photographs. If you have a photo saved as a PNG, converting it to a JPG can reduce its file size by up to 80%. Our tool handles this conversion instantly, adding a white background automatically if your original PNG had transparent areas.
                            </p>

                            <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>How Our Browser-Based Converter Works</h3>
                            <p>
                                Most online converters require you to upload your file to a server, wait in a queue, and then download the result. <strong>Zehbee Image Optimizer is different.</strong>
                            </p>
                            <p>
                                We use the HTML5 Canvas API built directly into modern web browsers. When you drop an image into our tool, your browser does the conversion locally. This means your files never leave your device, ensuring 100% privacy and blazing-fast performance.
                            </p>

                            <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>How to Convert Your Images</h3>
                            <ol style={{ paddingLeft: "1.5rem", marginBottom: "2.5rem", lineHeight: "1.8", color: "var(--text-2)" }}>
                                <li><strong>Select your file:</strong> Drag and drop your image into the converter.</li>
                                <li><strong>Choose output format:</strong> Select between JPG, PNG, or WebP from the dropdown menu.</li>
                                <li><strong>Download:</strong> Click the download button. The tool will instantly provide the converted file along with SEO-friendly file naming suggestions.</li>
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
