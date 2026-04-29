// components/ToolsGrid.tsx
import React from "react";
import Link from "next/link";
import type { Tool } from "@/lib/data";

type Props = {
    tools: Tool[];
};

// 🔹 ICON MAP (UI stays here, not in data)
const icons: Record<string, React.JSX.Element> = {
    "Compress Image Online": (
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
    ),
    "Convert Image to WebP": (
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
    ),
    "Resize Image Online": (
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
    ),
};

export default function ToolsGrid({ tools }: Props) {
    return (
        <ul className="tools-grid" role="list">
            {tools.map((tool) => (
                <li key={tool.href}>
                    <Link href={tool.href} className="tool-card">
                        <div
                            className="tool-icon"
                            style={{ color: tool.accent }}
                            aria-hidden="true"
                        >
                            {icons[tool.title] || null}
                        </div>

                        <div>
                            <p className="tool-name">{tool.title}</p>
                            <p className="tool-desc" style={{ marginTop: "0.3rem" }}>
                                {tool.description}
                            </p>
                        </div>

                        <span className="arrow" aria-hidden="true">
                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                            </svg>
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}