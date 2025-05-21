import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerLogo}>Melatonin AI</h3>
            <p>Your journey to better sleep starts here. Optimize your rest, energize your days.</p>
          </div>

          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/features"><a>Features</a></Link></li>
              <li><Link href="/benefits"><a>Benefits</a></Link></li>
              <li><Link href="/faqs"><a>FAQs</a></Link></li>
              <li><Link href="/blog"><a>Blog</a></Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy-policy"><a>Privacy Policy (Placeholder)</a></Link></li>
              <li><Link href="/terms-of-service"><a>Terms of Service (Placeholder)</a></Link></li>
              <li><Link href="/contact"><a>Contact Us</a></Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Follow Us</h4>
            <div className={styles.socialLinks}>
              {/* Replace with actual icons if available */}
              <a href="https://twitter.com/melatoninapp_placeholder" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://facebook.com/melatoninapp_placeholder" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://instagram.com/melatoninapp_placeholder" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>&copy; {currentYear} Melatonin AI. All rights reserved. (Placeholder)</p>
        </div>
      </div>
    </footer>
  );
}
