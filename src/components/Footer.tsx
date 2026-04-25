import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img src="/assets/mark.svg" alt="" className={styles.mark} />
          <span className={styles.brandText}>Forest</span>
        </div>

        <p className={styles.copy}>
          Open economic infrastructure for the AI-native economy.
        </p>

        <nav className={styles.nav}>
          <Link href="/">Manifesto</Link>
          <Link href="/open-economy">Thesis</Link>
          <Link href="/architecture">Architecture</Link>
          <Link href="/roadmap">Roadmap</Link>
        </nav>
      </div>
    </footer>
  );
}
