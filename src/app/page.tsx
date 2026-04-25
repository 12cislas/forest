import Link from "next/link";
import styles from "./page.module.css";

export default function ManifestoPage() {
  return (
    <article className={styles.page}>
      <header className={styles.masthead}>
        <p className={styles.eyebrow}>Forest · Manifesto</p>
        <h1 className={styles.display}>
          The last intermediary is the one you don&apos;t see coming.
        </h1>
        <p className={styles.lede}>
          AI dissolves the two coordination problems that made intermediaries
          necessary in the first place: finding and trust. If the new rails are
          closed, we recreate the same bottlenecks in a more total form.
        </p>
      </header>

      <div className={styles.prose}>
        <section className={styles.section}>
          <h2 className={styles.h2}>The old bargain</h2>
          <p>
            Platforms became dominant because they solved coordination across
            strangers. They helped people discover each other and reduced
            counterparty risk. The toll they charged became normal because the
            alternatives were slower, fragmented, or unsafe.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>What changed</h2>
          <p>
            Agents can now discover, verify, negotiate, and settle directly.
            Finding becomes queryable. Trust becomes attestable. The key
            question is no longer whether coordination is possible, but whether
            the infrastructure remains open.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Forest&apos;s position</h2>
          <p>
            Forest is the thinnest possible coordination layer: portable
            identity, user-owned wallets, open directory rails, and protocol
            interoperability. The goal is not to own the interface, but to make
            exit and competition structurally possible.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>Non-negotiable constraints</h2>
          <ul className={styles.list}>
            <li>No transaction take-rate.</li>
            <li>No owned user data.</li>
            <li>No proprietary directory lock-in.</li>
            <li>Full portability by default.</li>
            <li>Irrevocable nonprofit structure.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>The window is now</h2>
          <p>
            The agent economy rails are being defined now, not later. If the
            base layer stays open, the ecosystem can remain plural. If it
            closes early, the cost of reopening it will be generational.
          </p>
          <div className={styles.closingCta}>
            <Link href="/open-economy" className={styles.btnPrimary}>
              Read the thesis
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
