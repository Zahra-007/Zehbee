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
        title: "Compress Image Online",
        description: "Reduce image file size without losing quality using smart compression.",
        accent: "#C084FC",
        href: "/compress-image-online",
        category: "Image Tools",
        icon: null, // Icons will be mapped in ToolsGrid
    },
    {
        title: "Convert Image to WebP",
        description: "Convert PNG, JPG, and other formats to WebP for faster web loading.",
        accent: "#93C5FD",
        href: "/convert-image-to-webp",
        category: "Image Tools",
        icon: null,
    },
    {
        title: "Resize Image Online",
        description: "Change image dimensions while maintaining perfect aspect ratio.",
        accent: "#F9A8D4",
        href: "/resize-image-online",
        category: "Image Tools",
        icon: null,
    },
];

export const categories: Category[] = [
    {
        name: "Image Tools",
        color: "#C084FC",
        tools: ["Compress Image Online", "Convert Image to WebP", "Resize Image Online"],
    },
];

export const faqs: Faq[] = [
    {
        q: "What is Zehbee Image Optimizer?",
        a: "Zehbee Image Optimizer is a free, browser-based tool to compress, convert, and resize your images instantly without losing quality. It is designed to help webmasters and creators prepare SEO-friendly images.",
    },
    {
        q: "Do my images get uploaded to a server?",
        a: "No! All image processing happens 100% locally in your web browser. Your images are never uploaded, stored, or seen by our servers, ensuring complete privacy and blazing-fast performance.",
    },
    {
        q: "Is there a limit on file size or number of images?",
        a: "Because Zehbee runs in your browser, there are no artificial limits. You can process as many images as you like. However, very large images (e.g., 50MB+) may take longer to process depending on your device's memory.",
    },
    {
        q: "Why should I convert to WebP?",
        a: "WebP is a modern image format that provides superior lossless and lossy compression for images on the web. Using WebP makes your web pages load faster and improves your SEO scores.",
    },
    {
        q: "Is this tool free?",
        a: "Yes, Zehbee Image Optimizer is completely free to use with no hidden costs or subscriptions.",
    },
];