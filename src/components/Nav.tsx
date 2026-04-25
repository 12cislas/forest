import Link from "next/link";
import styles from "./Nav.module.css";

const links = [
  { href: "/", label: "Manifesto" },
  { href: "/open-economy", label: "Thesis" },
  { href: "/architecture", label: "Architecture" },
  { href: "/roadmap", label: "Roadmap" },
];

export default function Nav() {
  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <img src="/assets/mark.svg" alt="" className={styles.mark} />
          <span className={styles.brandText}>Forest</span>
        </Link>

        <nav className={styles.nav}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
