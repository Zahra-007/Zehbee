import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Zehbee",
    description: "Zehbee Privacy Policy. Learn how we protect your data.",
    alternates: { canonical: "https://zehbee.com/privacy" },
};

export default function PrivacyPage() {
    return (
        <div className="container" style={{ padding: "4rem 1.5rem", maxWidth: "800px" }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Privacy Policy</h1>
            <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", marginBottom: "3rem" }}>
                Last updated: October 2023
            </p>

            <div className="seo-body">
                <h2>1. Introduction</h2>
                <p>
                    Welcome to Zehbee. We respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you as to how we look after your personal data when you visit our website.
                </p>

                <h2>2. Data Collection and Processing</h2>
                <p>
                    <strong>We do not collect, store, or transmit your text inputs.</strong> All of our writing tools, including the Rewrite Text, Tone Changer, and Caption Generator, operate entirely locally within your web browser using JavaScript. Your text never touches our servers.
                </p>

                <h2>3. Analytics and Advertising</h2>
                <p>
                    We may use standard web analytics tools (like Google Analytics) to understand how visitors interact with our website. These tools may use cookies to collect standard internet log information and visitor behavior information in an anonymous form.
                </p>
                <p>
                    We may use third-party advertising companies (such as Google AdSense) to serve ads when you visit our website. These companies may use information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
                </p>

                <h2>4. Your Rights</h2>
                <p>
                    Because we do not store your personal text data, there is no personal data to delete. If you have concerns regarding analytics cookies, you can disable them in your browser settings.
                </p>

                <h2>5. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please visit our Contact page.
                </p>
            </div>
        </div>
    );
}
