import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Zehbee — Free Image Optimizer",
    description: "Learn more about Zehbee, the browser-based, privacy-first image optimization companion.",
    alternates: { canonical: "https://zehbee.com/about" },
};

export default function AboutPage() {
    return (
        <div className="container" style={{ padding: "4rem 1.5rem", maxWidth: "800px" }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>About Zehbee</h1>
            <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", marginBottom: "3rem" }}>
                Building tools that respect your privacy and your time.
            </p>

            <div className="seo-body">
                <h2>Our Mission</h2>
                <p>
                    Zehbee was built with a single goal: to provide high-quality, instant image tools without the modern web's bloat. We believe that simple tasks like compressing a photo or converting to WebP shouldn't require you to create an account, enter a credit card, or navigate through intrusive advertisements.
                </p>

                <h2>Privacy First</h2>
                <p>
                    Unlike major platforms that upload your files to their servers, Zehbee operates entirely in your web browser. When you use our Compress, Convert, or Resize tools, your images are processed locally on your own device using native browser APIs. We never see, save, or store your data.
                </p>

                <h2>Fast and Free</h2>
                <p>
                    Because our tools run client-side, they are incredibly fast and cost us almost nothing to host. We pass that benefit directly to you. Zehbee is 100% free forever, supported only by minimal, non-intrusive advertising to keep the servers running.
                </p>
            </div>
        </div>
    );
}
