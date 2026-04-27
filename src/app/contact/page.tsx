import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Zehbee",
    description: "Get in touch with the Zehbee team.",
    alternates: { canonical: "https://zehbee.com/contact" },
};

export default function ContactPage() {
    return (
        <div className="container" style={{ padding: "4rem 1.5rem", maxWidth: "800px" }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Contact Us</h1>
            <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", marginBottom: "3rem" }}>
                We'd love to hear from you.
            </p>

            <div className="seo-body">
                <p>
                    Whether you have a question about features, need assistance, or just want to share feedback, we are here to help.
                </p>
                <p>
                    Please reach out to us at: <strong>support@zehbee.com</strong>
                </p>
                <p>
                    We aim to respond to all inquiries within 48 hours.
                </p>
            </div>
        </div>
    );
}
