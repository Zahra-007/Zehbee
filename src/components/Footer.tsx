import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="footer-logo" aria-label="Zehbee Home">
              <svg
                className="logo-icon-small"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>zehbee</span>
            </Link>
            <p className="footer-desc">
              A premium image optimization toolkit for modern creators. Free forever, 100% private.
            </p>
          </div>
          
          <div className="footer-links-grid">
            <div className="footer-column">
              <h4>Tools</h4>
              <Link href="/compress-image-online">Compress Image Online</Link>
              <Link href="/convert-image-to-webp">Convert Image to WebP</Link>
              <Link href="/resize-image-online">Resize Image Online</Link>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <Link href="/blog">Blog</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} zehbee.com — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
