import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { getBlogPreviews } from "@/lib/blog";
import { tools, categories, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Zehbee — Free Online Tools for Images, AI & Content Creation",
  description: "Generate AI prompts, convert and compress images, generate AI captions, create QR codes, and convert text to speech — all free, no signup required.",
  keywords: "free online tools, ai prompt generator, image converter, ai image compressor, ai caption generator, qr code generator, text to speech",
  alternates: { canonical: "https://zehbee.com" },
  openGraph: {
    title: "Zehbee-Free Online Tools",
    description: "Free tools for images, AI prompts, QR codes, and text to speech.",
    url: "https://zehbee.com",
    siteName: "Zehbee",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zehbee-Free Online Tools",
    description: "All-in-one free tools for creators and marketers",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Zehbee",
  url: "https://zehbee.com",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default async function Home() {
  const blogPreviews = await getBlogPreviews();

  return (
    <>
      <Script id="schema-website" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Script id="schema-faq" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />



      {/* HERO */}
      <header className="hero">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          No Signup • 100% Free
        </div>
        <h1>
          Free AI &amp; Image Tools<br />
          <em>for Creators and Professionals</em>
        </h1>
        <p className="hero-sub">
          A comprehensive suite of browser-based utilities to generate AI prompts, compress images, create QR codes, and more — completely free with no hidden fees.
        </p>
        <div className="hero-actions">
          <Link href="#tools" className="btn-primary">
            Explore Tools
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <Link href="/blog" className="btn-secondary">
            Read the Blog
          </Link>
        </div>
      </header>

      {/* TRUST BAR */}
      <div className="trust-bar">
        {[
          { label: "100% Free to use", icon: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
          { label: "No account required", icon: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
          { label: "Secure browser processing", icon: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
          { label: "Instant downloads", icon: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
        ].map((t) => (
          <div className="trust-item" key={t.label}>
            {t.icon}
            {t.label}
          </div>
        ))}
      </div>

      {/* QUICK TOOLS GRID */}
      <section id="tools" aria-labelledby="tools-heading">
        <div className="container">
          <div className="section">
            <div className="section-header">
              <span className="section-label">Quick Access</span>
              <h2 id="tools-heading" className="section-title">Jump to a tool</h2>
            </div>
            <ul className="tools-grid">
              {tools.map((tool) => (
                <li key={tool.href}>
                  <Link href={tool.href} className="tool-card">
                    <div className="tool-card-top">
                      <div className="tool-icon-wrap" style={{ color: tool.accent }}>
                        {tool.icon}
                      </div>
                      <span className="tool-arrow" aria-hidden="true">
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                        </svg>
                      </span>
                    </div>
                    <div>
                      <p className="tool-tag">{tool.category}</p>
                      <p className="tool-name">{tool.title}</p>
                    </div>
                    <p className="tool-desc">{tool.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OUR SUITE OF FREE TOOLS (SEO EXPANDED) */}
      <section aria-labelledby="suite-heading" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section" style={{ paddingTop: 0 }}>
            <div className="section-header">
              <span className="section-label">Features</span>
              <h2 id="suite-heading" className="section-title">Our suite of free online tools</h2>
            </div>
            <div className="seo-inner" style={{ marginTop: "2rem", display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
              <div className="seo-body">
                <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>AI Prompt Generator</h3>
                <p>Crafting the perfect prompt is the secret to getting amazing results from AI. Our free prompt generator provides structured, proven frameworks tailored for image generation (like Midjourney) and text models (like ChatGPT). Save time and eliminate guesswork by building highly optimized prompts in seconds.</p>
              </div>
              <div className="seo-body">
                <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>AI Caption Generator</h3>
                <p>Struggling with what to post? The AI caption generator analyzes your image or context to instantly write engaging, platform-specific captions for Instagram, LinkedIn, and Twitter. Whether you need something professional or casual, generate the perfect copy without the creative block.</p>
              </div>
              <div className="seo-body">
                <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>Image Converter &amp; Compressor</h3>
                <p>Website performance and social media depend on proper image optimization. Our tools allow you to seamlessly convert between PNG, JPG, and WEBP formats, while the AI Image Compressor smartly reduces file sizes without visible quality loss. All processing is done securely within your browser.</p>
              </div>
              <div className="seo-body">
                <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>QR Code Generator &amp; TTS</h3>
                <p>Create clean, scannable QR codes for your links or business cards with instant download capabilities. Need audio? Our Text-to-Speech (TTS) converter turns written content into natural-sounding voice audio instantly, providing accessibility and multimedia value for your projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section aria-labelledby="how-heading" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section" style={{ paddingTop: 0 }}>
            <div className="section-header">
              <span className="section-label">Workflow</span>
              <h2 id="how-heading" className="section-title">How Zehbee works</h2>
            </div>
            <div className="seo-stats" style={{ marginTop: "2rem" }}>
              <div className="seo-stat">
                <div className="seo-stat-num">1</div>
                <div className="seo-stat-label">Select a Tool</div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>Choose from our suite of image and AI utilities without creating an account.</p>
              </div>
              <div className="seo-stat">
                <div className="seo-stat-num">2</div>
                <div className="seo-stat-label">Process Instantly</div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>Upload your file or enter your text. Our tools run efficiently directly in your browser.</p>
              </div>
              <div className="seo-stat">
                <div className="seo-stat-num">3</div>
                <div className="seo-stat-label">Download &amp; Use</div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>Get your optimized images, AI prompts, or QR codes immediately for free.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US & EDUCATIONAL SEO CONTENT */}
      <div className="seo-section">
        <div className="container">
          <div className="seo-inner">
            <div className="seo-body">
              <h2 className="seo-title">Why choose Zehbee for your workflow?</h2>
              <p>
                Zehbee is built for creators, marketers, and developers who need reliable tools without the friction of subscriptions or hidden paywalls. By leveraging local browser processing, we ensure that your images remain completely private—your files never touch our servers.
              </p>
              <h3 style={{ marginTop: "2rem", marginBottom: "1rem", fontSize: "1.25rem", color: "var(--text-primary)" }}>Understanding AI and Image Optimization</h3>
              <p>
                In today's digital landscape, speed and quality are critical. <strong>Image optimization</strong> improves website load times, which is a key factor in technical SEO and user retention. Using modern formats like WEBP alongside smart compression ensures your site stays fast.
              </p>
              <p>
                Similarly, <strong>AI tools</strong> are transforming how content is created. From generating structured prompts to writing engaging captions, integrating AI into your daily tasks can drastically reduce the time spent on repetitive creative work, allowing you to focus on strategy and execution.
              </p>
            </div>
            <div className="seo-stats">
              {[
                { num: "100%", label: "Free, forever" },
                { num: "Zero", label: "Hidden fees or accounts" },
                { num: "Local", label: "Browser-based privacy" },
              ].map((s) => (
                <div className="seo-stat" key={s.label}>
                  <div className="seo-stat-num">{s.num}</div>
                  <div className="seo-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <section aria-labelledby="cat-heading">
        <div className="container">
          <div className="section">
            <div className="section-header">
              <span className="section-label">Browse by Category</span>
              <h2 id="cat-heading" className="section-title">Tools organized by use case</h2>
            </div>
            <ul className="categories-grid">
              {categories.map((cat) => (
                <li key={cat.name} className="category-card">
                  <div className="category-header">
                    <span className="category-dot" style={{ background: cat.color }} />
                    <span className="category-name">{cat.name}</span>
                  </div>
                  <ul className="category-tools">
                    {tools.filter((t) => t.category === cat.name).map((t) => (
                      <li key={t.href}>
                        <Link href={t.href} className="category-tool-link">
                          <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                          {t.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section aria-labelledby="blog-heading" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section" style={{ paddingTop: 0 }}>
            <div className="section-header">
              <span className="section-label">From the Blog</span>
              <h2 id="blog-heading" className="section-title">Guides &amp; tips for every tool</h2>
            </div>
            <ul className="blog-list">
              {blogPreviews.map((post, i) => (
                <li key={post.href}>
                  <Link href={post.href} className="blog-item">
                    <div className="blog-item-left">
                      <span className="blog-num">{i + 1}</span>
                      <span className="blog-title">{post.title}</span>
                    </div>
                    <span className="blog-arrow" aria-hidden="true">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section" style={{ paddingTop: 0 }}>
            <div className="section-header">
              <span className="section-label">FAQ</span>
              <h2 id="faq-heading" className="section-title">Frequently asked questions</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.q} className="faq-item">
                  <summary className="faq-q">
                    {faq.q}
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="faq-a">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>


    </>
  );
}