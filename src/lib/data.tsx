import type { ReactNode } from "react";

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

export const tools: Tool[] = [
    {
        title: "Rewrite Text Online",
        description: "Instantly improve clarity, grammar, and flow of your writing.",
        accent: "#C084FC",
        href: "/rewrite-text-online",
        category: "Writing Tools",
        icon: (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.89 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.89l12.675-12.688z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 7.125L16.862 4.487" />
            </svg>
        ),
    },
    {
        title: "Tone Changer Tool",
        description: "Change the tone of your text to formal, casual, persuasive, and more.",
        accent: "#93C5FD",
        href: "/tone-changer-tool",
        category: "Writing Tools",
        icon: (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.43 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
            </svg>
        ),
    },
    {
        title: "AI Caption Generator",
        description: "Generate smart, engaging captions with hashtags for your social media.",
        accent: "#F9A8D4",
        href: "/ai-caption-generator",
        category: "Social Media Tools",
        icon: (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
        ),
    },
    {
        title: "AI Prompt Generator",
        description: "Generate highly optimized prompts for Midjourney, ChatGPT, and more.",
        accent: "#FCD34D",
        href: "/ai-writing-assistant", // Will point to prompt mode
        category: "AI Tools",
        icon: (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.82 1.508-2.316a7.5 7.5 0 10-7.516 0c.85.496 1.508 1.333 1.508 2.316V18" />
            </svg>
        ),
    },
];

export const categories: Category[] = [
    {
        name: "Writing Tools",
        color: "#C084FC",
        tools: ["Rewrite Text Online", "Tone Changer Tool"],
    },
    {
        name: "Social Media Tools",
        color: "#F9A8D4",
        tools: ["AI Caption Generator"],
    },
    {
        name: "AI Tools",
        color: "#FCD34D",
        tools: ["AI Prompt Generator"],
    },
];

export const faqs: Faq[] = [
    {
        q: "What is Zehbee AI Writing Assistant?",
        a: "Zehbee AI Writing Assistant is a free, all-in-one platform to help you write better. It includes tools to rewrite text, change the tone of your writing, generate social media captions, and create optimized AI prompts directly in your browser.",
    },
    {
        q: "Do I need to create an account?",
        a: "No! Zehbee is 100% free and requires absolutely no registration, login, or credit card. You can start using all features immediately.",
    },
    {
        q: "Is my data secure?",
        a: "Yes. All text generation and modifications happen directly within your web browser using rule-based local logic. We do not save your inputs or send your data to external servers.",
    },
    {
        q: "How does the Tone Changer work?",
        a: "The Tone Changer analyzes your text and applies intelligent rule-based substitutions to adjust the vocabulary and phrasing to match your desired tone (e.g., making it more formal for business emails or casual for friends).",
    },
    {
        q: "Can I use the generated content for commercial purposes?",
        a: "Absolutely. Everything you generate with Zehbee is fully yours to use anywhere, whether it's for business, personal blogs, or social media.",
    },
];