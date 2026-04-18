import PageHeader from "@/components/PageHeader";
import styles from "../inner.module.css";

export const metadata = {
  title: "Architecture — Forest",
  description:
    "Incorruptibility comes from architecture, not promises. Five irrevocable constraints, written into the Forest Foundation charter.",
};

const constraints = [
  {
    num: "i.",
    title: "No transaction revenue",
    body: "Forest never takes a percentage of what flows between parties. Payments are peer-to-peer at the protocol layer; we have no place in the flow to extract from, now or ever.",
  },
  {
    num: "ii.",
    title: "No owned data",
    body: "Your identity, your history, your preferences live in storage you control. Forest holds no master copy, sells nothing, trains on nothing. Leaving is a file export, not a support ticket.",
  },
  {
    num: "iii.",
    title: "No proprietary directory",
    body: "The registry is public and forkable under an open license. If Forest ever degrades it, anyone can fork and continue. Our only moat is being trustworthy; the moment we stop, the moat evaporates.",
  },
  {
    num: "iv.",
    title: "Full portability",
    body: "Every primitive is designed for exit. Identity, wallet, directory entries, client data — all defined against open specs so a user can switch implementations without coordination from us.",
  },
  {
    num: "v.",
    title: "Irrevocable nonprofit charter",
    body: "Forest Foundation is structured so that acquisition, equity financing, and for-profit conversion are legally foreclosed. The board cannot undo this. The commitment is in the governing documents, not in a blog post.",
  },
];

export default function ArchitecturePage() {
  return (
    <article className={styles.page}>
      <PageHeader
        eyebrow="Architecture"
        title="Incorruptibility is a"
        emphasis="structural"
        titleTail="property."
        lede="Every platform that enshittified promised it wouldn't. The promise was the only thing holding it back. Forest replaces the promise with five constraints that cannot be undone unilaterally."
      />

      <div className={styles.body}>
        <section className={styles.section}>
          <h2 className={styles.h2}>The five <span className={styles.em}>constraints.</span></h2>
          <ul className={styles.constraintList}>
            {constraints.map((c) => (
              <li key={c.num} className={styles.constraintItem}>
                <div className={styles.constraintNum}>{c.num}</div>
                <div>
                  <h3 className={styles.constraintTitle}>{c.title}</h3>
                  <p className={styles.constraintBody}>{c.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <div className={styles.eyebrow}>Why five</div>
          <h2 className={styles.h2}>Any single constraint <span className={styles.em}>can be walked back.</span></h2>
          <p>
            A nonprofit charter alone is not enough — nonprofits have
            converted before. Open source alone is not enough — permissive
            licenses get re-licensed. No-ads alone is not enough — "limited
            ads" is still ads. Five together do the work no one of them can
            do alone.
          </p>
          <p>
            Remove any one and the other four have to carry the load. The
            load is too heavy for four. So all five, together, irrevocably,
            or the system doesn't hold.
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.eyebrow}>Governance</div>
          <h2 className={styles.h2}>Audited, <span className={styles.em}>adversarially.</span></h2>
          <p>
            The charter, finances, and infrastructure are published annually
            and reviewed by an independent board that cannot be stacked by
            the executive. We publish our failures alongside our wins. The
            structure is designed to make a future Forest team that wants to
            do the wrong thing fail loudly, in public, before they succeed.
          </p>
        </section>
      </div>
    </article>
  );
}
