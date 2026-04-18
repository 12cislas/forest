import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <div className={styles.brand}>
            <img src="/assets/mark.svg" alt="" className={styles.mark} />
            <span className={styles.brandText}>Forest</span>
          </div>
          <p className={styles.tagline}>
            Open economic infrastructure for the AI-native economy.
          </p>
        </div>

        <div>
          <div className={styles.colTitle}>Mission</div>
          <Link href="/" className={styles.colLink}>Manifesto</Link>
          <Link href="/open-economy" className={styles.colLink}>Open economy</Link>
          <Link href="/architecture" className={styles.colLink}>Principles</Link>
        </div>

        <div>
          <div className={styles.colTitle}>Product</div>
          <Link href="/product" className={styles.colLink}>What Forest is</Link>
          <Link href="/architecture" className={styles.colLink}>Architecture</Link>
          <Link href="/roadmap" className={styles.colLink}>Roadmap</Link>
        </div>

        <div>
          <div className={styles.colTitle}>Forest</div>
          <a href="#" className={styles.colLink}>Contact</a>
          <a href="#" className={styles.colLink}>Charter</a>
          <a href="#" className={styles.colLink}>Transparency</a>
        </div>
      </div>
      <div className={styles.meta}>
        <div>Forest Foundation · Nonprofit charter</div>
        <div>⁂ Built in the open.</div>
      </div>
    </footer>
  );
}
