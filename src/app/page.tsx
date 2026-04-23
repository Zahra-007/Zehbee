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
    title: "Zehbee — Free Online Tools",
    description: "Free tools for images, AI prompts, QR codes, and text to speech.",
    url: "https://zehbee.com",
    siteName: "Zehbee",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zehbee — Free Online Tools",
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
          Free Forever — No Signup
        </div>
        <h1>
          The Toolkit for<br />
          <em>Modern Creators</em>
        </h1>
        <p className="hero-sub">
          Generate AI prompts, compress and convert images, generate AI captions, create QR codes,
          and convert text to speech — all in one place, completely free.
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
          { label: "Free to use", icon: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
          { label: "No signup required", icon: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
          { label: "Runs in your browser", icon: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
          { label: "Fast & secure", icon: <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
        ].map((t) => (
          <div className="trust-item" key={t.label}>
            {t.icon}
            {t.label}
          </div>
        ))}
      </div>

      {/* TOOLS */}
      <section id="tools" aria-labelledby="tools-heading">
        <div className="container">
          <div className="section">
            <div className="section-header">
              <span className="section-label">All Tools</span>
              <h2 id="tools-heading" className="section-title">Everything you need, free forever</h2>
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

      {/* SEO CONTENT */}
      <div className="seo-section">
        <div className="container">
          <div className="seo-inner">
            <div className="seo-body">
              <h2 className="seo-title">Built for creators, students &amp; marketers</h2>
              <p>
                Zehbee is a collection of powerful, free online tools for anyone who works
                with images, content, or digital media. Whether you&apos;re generating AI prompts,
                compressing and converting image formats, or generating QR codes — Zehbee has you covered.
              </p>
              <p>
                All tools run directly in your browser. No software to install, no account
                to create, no files stored on a server. Your data stays private.
              </p>
              <p>
                From AI-powered caption generation to instant text-to-speech conversion,
                Zehbee brings the tools you use most into one clean, fast, free platform.
              </p>
            </div>
            <div className="seo-stats">
              {[
                { num: "6", label: "Free tools, no limits" },
                { num: "0", label: "Accounts required" },
                { num: "100%", label: "Browser-based, no installs" },
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
            <dl className="faq-list">
              {faqs.map((faq) => (
                <div key={faq.q} className="faq-item">
                  <dt className="faq-q">{faq.q}</dt>
                  <dd className="faq-a">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>


    </>
  );
}