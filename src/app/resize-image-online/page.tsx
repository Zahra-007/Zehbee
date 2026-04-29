import { Metadata } from "next";
import ImageOptimizer from "@/components/ImageOptimizer";
import FaqList from "@/components/FaqList";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
    title: "Resize Image Online - Fast & Free Image Resizer",
    description: "Resize your images online for free. Adjust image dimensions, maintain aspect ratios, and optimize pictures for social media and web instantly.",
};

export default function ResizeImagePage() {
    return (
        <>
            <section className="hero">
                <div className="hero-badge">
                    <span className="hero-badge-dot"></span>
                    100% Private Client-Side Processing
                </div>
                <h1>Resize Image <em>Online</em></h1>
                <p className="hero-sub">
                    Change image dimensions easily. Perfect for social media, blogs, and web design.
                </p>
            </section>

            <ImageOptimizer defaultTab="resize" />

            <section className="seo-section">
                <div className="container">
                    <div className="seo-inner" style={{ display: "block" }}>
                        <div className="seo-body">
                            <h2 className="seo-title">Free Online Image Resizer</h2>
                            <p>
                                Whether you are preparing a photo for an Instagram post, a YouTube thumbnail, or a blog header, getting the exact dimensions right is crucial. Our <strong>free online image resizer</strong> allows you to change the width and height of your images in seconds, directly from your browser.
                            </p>
                            
                            <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>Why Do You Need to Resize Images?</h3>
                            <p>
                                Modern cameras and smartphones capture photos at massive resolutions (often 4K or 8K). While this is great for printing, these enormous dimensions are overkill for web usage and social media.
                            </p>
                            <ul style={{ paddingLeft: "1.5rem", marginBottom: "1.5rem", lineHeight: "1.8", color: "var(--text-2)" }}>
                                <li><strong>Social Media Requirements:</strong> Platforms like Instagram, Facebook, and Twitter have specific dimension requirements. Uploading improperly sized images can result in awkward cropping or pixelation.</li>
                                <li><strong>Website Optimization:</strong> Serving a 4000px wide image in a space that is only 800px wide forces the user's browser to download a massive file unnecessarily. Resizing to the exact dimensions needed speeds up your website.</li>
                                <li><strong>Email Attachments:</strong> Many email clients have strict size limits. Resizing your image dimensions is an effective way to reduce file size to fit within attachment limits.</li>
                            </ul>

                            <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>Maintaining Aspect Ratio</h3>
                            <p>
                                One of the most common mistakes when resizing images is stretching or squishing the photo. Our tool features a built-in <strong>"Maintain Aspect Ratio"</strong> lock. When this is checked, you only need to enter either the desired width or the desired height. The tool will automatically calculate the other dimension to ensure your image stays perfectly proportioned.
                            </p>

                            <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>100% Private and Secure</h3>
                            <p>
                                Just like our compression and conversion tools, the Zehbee Image Resizer operates entirely within your web browser. When you upload a photo, it is never transmitted over the internet to our servers. All resizing calculations and image rendering happen locally on your computer or smartphone, guaranteeing your complete privacy.
                            </p>

                            <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem", marginTop: "2.5rem" }}>How to Resize Your Image</h3>
                            <ol style={{ paddingLeft: "1.5rem", marginBottom: "2.5rem", lineHeight: "1.8", color: "var(--text-2)" }}>
                                <li><strong>Upload:</strong> Drag and drop your image into the tool.</li>
                                <li><strong>Set Dimensions:</strong> Enter your target width or height in pixels. Keep "Maintain aspect ratio" checked to prevent distortion.</li>
                                <li><strong>Preview:</strong> Instantly see how your newly resized image looks.</li>
                                <li><strong>Save:</strong> Click download to save the perfectly sized image to your device.</li>
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
