// lib/blog.ts
// Blog data abstraction layer.
//
// TODAY  → returns a static array (zero dependencies, zero build cost).
// FUTURE → swap the body of getBlogPreviews() for any of these patterns
//          without touching page.tsx at all:
//
//   • File-based MDX  : use `fs` + `gray-matter` to read /content/blog/*.mdx
//   • Contentful CMS  : call contentful.getEntries({ content_type: "post" })
//   • Sanity CMS      : groq`*[_type == "post"]{ title, slug }`
//   • Hashnode API    : fetch("https://api.hashnode.com", { ... })
//
// The shape ({ title, href }) is intentionally minimal — extend BlogPreview
// when you need thumbnails, dates, tags, etc.

export type BlogPreview = {
    title: string;
    href: string;
    /** Optional: add publishedAt, excerpt, coverImage, tags when ready */
};

const STATIC_BLOG_PREVIEWS: BlogPreview[] = [
    {
        title: "How to Write the Perfect Midjourney Prompt in 2025",
        href: "/blog/write-perfect-midjourney-prompt",
    },
    {
        title: "How to Compress Images for the Web Without Losing Quality",
        href: "/blog/compress-images-without-losing-quality",
    },
    {
        title: "Best Free Image Converters Online in 2025",
        href: "/blog/best-free-image-converters",
    },
    {
        title: "How to Generate AI Captions for Instagram for Free",
        href: "/blog/ai-captions-instagram-free",
    },
    {
        title: "How to Create a QR Code for Your Business in 30 Seconds",
        href: "/blog/create-qr-code-business",
    },
    {
        title: "Text to Speech: Best Free Online Tools Compared",
        href: "/blog/text-to-speech-free-tools",
    },
];

/**
 * Returns blog post previews for the homepage.
 * Async so page.tsx can await it without any changes when you switch to a CMS.
 */
export async function getBlogPreviews(): Promise<BlogPreview[]> {
    // ── File-based MDX example (uncomment when ready) ──────────────────────────
    // import fs from "fs";
    // import path from "path";
    // import matter from "gray-matter";
    //
    // const dir = path.join(process.cwd(), "content/blog");
    // const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
    // return files.map((file) => {
    //   const { data } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
    //   return { title: data.title, href: `/blog/${file.replace(".mdx", "")}` };
    // });
    // ───────────────────────────────────────────────────────────────────────────

    return STATIC_BLOG_PREVIEWS;
}