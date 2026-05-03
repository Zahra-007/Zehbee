import { Metadata } from "next";
import CategoriesGrid from "@/components/CategoriesGrid";
import { categories, tools } from "@/lib/data";

export const metadata: Metadata = {
    title: "All Tools - Zehbee Utility Hub",
    description: "Discover all the free browser-based tools available on Zehbee. Convert, compress, generate, and extract files instantly in your browser.",
};

export default function ToolsHubPage() {
    return (
        <main className="container section">
            <div className="section-header">
                <span className="section-label">Utility Hub</span>
                <h1 className="section-title">All Tools</h1>
                <p className="hero-sub" style={{ marginTop: '1rem' }}>
                    A unified utility hub where you can convert, compress, generate, and extract files instantly directly from your browser.
                </p>
            </div>
            
            <CategoriesGrid categories={categories} tools={tools} />
        </main>
    );
}
