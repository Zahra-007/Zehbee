// lib/data.tsx
// Single source of truth for all static site data.
// Import from here in page.tsx and any component that needs it.

import type { ReactNode } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type Tool = {
    title: string;
    description: string;
    accent: string;
    href: string;
    category: string;
    icon: ReactNode;
};

export type Category = {
    name: string;
    color: string;
    tools: string[];
};

export type Faq = {
    q: string;
    a: string;
};

// ─── Tools ───────────────────────────────────────────────────────────────────

export const tools: Tool[] = [
    {
        title: "AI Prompt Generator",
        description: "Generate highly optimized prompts for Midjourney, ChatGPT, and more.",
        accent: "#C084FC",
        href: "/ai-prompt-generator",
        category: "AI Tools",
        icon: (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316V18" />
            </svg>
        ),
    },
    {
        title: "Image Converter",
        description: "Convert images between PNG, JPG, WEBP and more formats in seconds.",
        accent: "#93C5FD",
        href: "/image-converter",
        category: "Image Tools",
        icon: (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        ),
    },
    {
        title: "AI Caption Generator",
        description: "Generate smart, engaging captions for your images using AI.",
        accent: "#F9A8D4",
        href: "/ai-caption",
        category: "AI Tools",
        icon: (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
        ),
    },
    {
        title: "QR Code Generator",
        description: "Generate QR codes for URLs, text, or contact info — download instantly.",
        accent: "#FCD34D",
        href: "/qr-generator",
        category: "Utility Tools",
        icon: (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
            </svg>
        ),
    },
    {
        title: "Text to Speech",
        description: "Convert any text to natural sounding audio — free, instant, no signup.",
        accent: "#A78BFA",
        href: "/text-to-speech",
        category: "AI Tools",
        icon: (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
        ),
    },
    {
        title: "AI Image Compressor",
        description: "Smartly compress your images while keeping high quality using AI algorithms.",
        accent: "#34D399",
        href: "/ai-image-compressor",
        category: "Image Tools",
        icon: (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
        ),
    },
];

// ─── Categories ───────────────────────────────────────────────────────────────

export const categories: Category[] = [
    {
        name: "Image Tools",
        color: "#6EE7B7",
        tools: ["Image Converter", "AI Image Compressor"],
    },
    {
        name: "AI Tools",
        color: "#F9A8D4",
        tools: ["AI Prompt Generator", "AI Caption Generator", "Text to Speech"],
    },
    {
        name: "Utility Tools",
        color: "#FCD34D",
        tools: ["QR Code Generator"],
    },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const faqs: Faq[] = [
    {
        q: "What is the best free AI prompt generator online?",
        a: "Zehbee's AI Prompt Generator is designed to help you create highly optimized, effective prompts for leading AI models like Midjourney and ChatGPT. It provides structured frameworks to ensure your prompts yield the best possible results, all directly from your browser without any cost or registration.",
    },
    {
        q: "How do I compress images without losing visual quality?",
        a: "Our AI Image Compressor utilizes smart algorithms to reduce file sizes significantly while maintaining crisp visual fidelity. This ensures your website loads faster and performs better in search engine rankings, without sacrificing the quality of your images. The entire process happens securely in your browser.",
    },
    {
        q: "Which image formats can I convert for free?",
        a: "The Zehbee Image Converter supports all major formats including PNG, JPG, WEBP, and more. It allows you to seamlessly switch between formats for web optimization, social media posting, or professional use. All conversions are fast, free, and require no software installation.",
    },
    {
        q: "How does the AI Caption Generator work?",
        a: "The AI Caption Generator analyzes your inputs or images to instantly produce smart, engaging captions tailored for platforms like Instagram, Twitter, and LinkedIn. It saves time and helps boost engagement by generating professional copy in seconds, completely free of charge.",
    },
    {
        q: "Can I generate a QR code for commercial use?",
        a: "Yes! Zehbee's QR Code Generator lets you create high-quality, scannable QR codes for URLs, text, or contact information. You can download the generated codes instantly and use them on business cards, marketing materials, or websites without any licensing restrictions or fees.",
    },
    {
        q: "Is my data secure when using Zehbee tools?",
        a: "Absolutely. We prioritize your privacy. All of our tools, including the image converter and compressor, process your files locally within your web browser. We do not upload, store, or share your files on external servers, ensuring complete data security.",
    },
];