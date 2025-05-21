import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <a>Melatonin AI</a>
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/features"><a>Features</a></Link></li>
            <li><Link href="/benefits"><a>Benefits</a></Link></li>
            <li><Link href="/testimonials"><a>Testimonials</a></Link></li>
            <li><Link href="/faqs"><a>FAQs</a></Link></li>
            <li><Link href="/blog"><a>Blog</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
          </ul>
        </nav>
        <button className={styles.mobileMenuButton} aria-label="Open navigation menu">
          {/* Basic SVG for menu icon, can be replaced with a proper icon library if available */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
}
