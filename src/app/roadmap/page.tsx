import PageHeader from "@/components/PageHeader";
import styles from "../inner.module.css";

export const metadata = {
  title: "Roadmap — Forest",
  description:
    "The rails of the agent economy are being poured now. Here is the order of operations for Forest — what ships first, next, and never.",
};

const phases = [
  {
    meta: "Phase 0",
    status: "Now",
    title: "Charter and foundation.",
    body: "Incorporate the Forest Foundation as a nonprofit with the five constraints written into the governing documents. Publish the charter in full. Appoint an initial board from outside the operating team.",
  },
  {
    meta: "Phase 1",
    status: "Next 90 days",
    title: "Identity and wallet primitives.",
    body: "Ship the first open implementations of verified identity and the user-owned wallet against existing open specs. Reference client for developers, public testnet, documented interop.",
  },
  {
    meta: "Phase 2",
    status: "Q3 2026",
    title: "Open directory and MPP.",
    body: "Launch the public, forkable directory. Publish the Merchant-Payment-Protocol reference implementation and co-develop the spec with early partners. Listing is free, discovery is ranked algorithmically and the algorithm is open.",
  },
  {
    meta: "Phase 3",
    status: "Late 2026",
    title: "Reference AI client.",
    body: "A clean end-user entry point that uses Forest's own rails. The client is a demo, not the product. Anyone can ship a competitor on the same substrate from day one.",
  },
  {
    meta: "Phase 4",
    status: "2027",
    title: "Hand-off, not scale.",
    body: "Forest does not grow into the thing it exists to replace. As other implementations of the primitives mature, Forest's own footprint shrinks. Success looks like being one of many — ideally, being redundant.",
  },
];

export default function RoadmapPage() {
  return (
    <article className={styles.page}>
      <PageHeader
        eyebrow="Roadmap"
        title="The rails are being poured"
        emphasis="right now."
        lede="This is the order of operations. Dates are targets, not promises. The charter comes first, because everything else is only meaningful in the context of a structure that can hold."
      />

      <div className={styles.body}>
        <section className={styles.section}>
          <ul className={styles.phaseList}>
            {phases.map((p) => (
              <li key={p.meta} className={styles.phase}>
                <div>
                  <div className={styles.phaseMeta}>{p.meta}</div>
                  <span className={styles.phaseStatus}>{p.status}</span>
                </div>
                <div>
                  <h3 className={styles.phaseTitle}>{p.title}</h3>
                  <p className={styles.phaseBody}>{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <div className={styles.eyebrow}>What is not on the roadmap</div>
          <h2 className={styles.h2}>The things <span className={styles.em}>we will never ship.</span></h2>
          <p>
            A proprietary foundation model. A paid-listings tier. A merchant
            processing business. An acquisitions arm. A closed enterprise
            edition. Any of these would grow revenue. All of them would end
            Forest. The absence from this list is the point.
          </p>
        </section>
      </div>
    </article>
  );
}
