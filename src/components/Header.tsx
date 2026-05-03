import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link href="/" className="logo-link" aria-label="Zehbee Home">
          <svg
            className="logo-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              fill="currentColor"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="logo-text">zehbee</span>
        </Link>

        <nav className="header-nav">
          <Link href="/tools" className="nav-link">Tools</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/about" className="nav-link">About</Link>
        </nav>

        <div className="header-actions">
          <Link href="/tools" className="btn-cta">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
