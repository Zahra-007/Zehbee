import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Zehbee",
    description: "Zehbee Terms of Service.",
    alternates: { canonical: "https://zehbee.com/terms" },
};

export default function TermsPage() {
    return (
        <div className="container" style={{ padding: "4rem 1.5rem", maxWidth: "800px" }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Terms of Service</h1>
            <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", marginBottom: "3rem" }}>
                Last updated: October 2023
            </p>

            <div className="seo-body">
                <h2>1. Acceptance of Terms</h2>
                <p>
                    By accessing and using Zehbee, you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h2>2. Use License</h2>
                <p>
                    Permission is granted to temporarily use the tools on Zehbee's website for personal, non-commercial, or commercial transitory viewing/processing. This is the grant of a license, not a transfer of title.
                </p>

                <h2>3. Disclaimer</h2>
                <p>
                    The materials on Zehbee's website are provided on an 'as is' basis. Zehbee makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h2>4. Limitations</h2>
                <p>
                    In no event shall Zehbee or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zehbee's website.
                </p>

                <h2>5. Content Generation</h2>
                <p>
                    Zehbee provides tools to modify and optimize images. You retain full ownership and copyright of any original images you input. Zehbee claims no ownership over the generated outputs, and you are free to use them commercially.
                </p>
            </div>
        </div>
    );
}
