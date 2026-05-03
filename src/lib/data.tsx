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
        title: "Image to PDF",
        description: "Convert multiple images into a single high-quality PDF document.",
        accent: "#C084FC",
        href: "/tools/image-to-pdf",
        category: "Image Tools",
        icon: null,
    },
    {
        title: "PDF to Image",
        description: "Extract pages from a PDF document and save them as high-quality images.",
        accent: "#F87171",
        href: "/tools/pdf-to-image",
        category: "PDF Tools",
        icon: null,
    },
    {
        title: "QR Code Generator",
        description: "Generate customized QR codes instantly from text or URLs.",
        accent: "#34D399",
        href: "/tools/qr-generator",
        category: "Utility Tools",
        icon: null,
    },
    {
        title: "Text Counter",
        description: "Real-time word, character, and sentence counting utility.",
        accent: "#60A5FA",
        href: "/tools/text-counter",
        category: "Utility Tools",
        icon: null,
    },
];

export const categories: Category[] = [
    {
        name: "Image Tools",
        color: "#C084FC",
        tools: ["Compress Image Online", "Image to PDF"],
    },
    {
        name: "PDF Tools",
        color: "#F87171",
        tools: ["PDF to Image"],
    },
    {
        name: "Utility Tools",
        color: "#34D399",
        tools: ["QR Code Generator", "Text Counter"],
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