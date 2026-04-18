import PageHeader from "@/components/PageHeader";
import styles from "../inner.module.css";

export const metadata = {
  title: "The product — Forest",
  description:
    "Four primitives — identity, wallet, directory, protocols. Nothing more. Forest ships the thinnest possible coordination layer for the agent economy.",
};

const primitives = [
  {
    num: "i.",
    title: "Verified identity",
    body: "A portable, user-owned identity that any agent or service can verify without phoning home to a platform. No tenancy. No lock-in. Rotatable, revocable, yours.",
    tag: "DID + attestations",
  },
  {
    num: "ii.",
    title: "User-owned wallet",
    body: "Payments settle directly between parties. Forest never holds funds, never routes them, never takes a cut. The wallet is the user's — we only publish the spec.",
    tag: "x402",
  },
  {
    num: "iii.",
    title: "Open directory",
    body: "A public, forkable registry of agents, services, and tools. No pay-to-rank. No proprietary listings. If we ever misuse it, anyone can fork and keep going.",
    tag: "MPP",
  },
  {
    num: "iv.",
    title: "Protocol integrations",
    body: "MCP for tools, x402 for payments, MPP for discovery. Forest does not invent a new stack — it implements and maintains the open one, and ships it as the default.",
    tag: "MCP · x402 · MPP",
  },
];

export default function ProductPage() {
  return (
    <article className={styles.page}>
      <PageHeader
        eyebrow="The product"
        title="Four primitives."
        emphasis="Nothing"
        titleTail="else."
        lede="Forest is not an application. It is an open substrate — four coordination primitives, documented, implemented, and handed over to the commons."
      />

      <div className={styles.body}>
        <div className={styles.grid4}>
          {primitives.map((p) => (
            <div className={styles.card} key={p.num}>
              <div className={styles.cardNum}>{p.num}</div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <span className={styles.codeTag}>{p.tag}</span>
              <p className={styles.cardBody}>{p.body}</p>
            </div>
          ))}
        </div>

        <section className={styles.section}>
          <div className={styles.eyebrow}>What's above the line</div>
          <h2 className={styles.h2}>An interface, yes. <span className={styles.em}>Optional.</span></h2>
          <p>
            Forest ships a reference AI client — a clean entry point, so the
            protocols can be used on day one by people who do not want to
            assemble their own. The client is the most visible piece and the
            least important one.
          </p>
          <p>
            Anyone can build their own on the same rails. Competitors can
            route through the same directory. The client is a demonstration
            that the substrate works. It is never the business.
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.eyebrow}>What Forest will not build</div>
          <h2 className={styles.h2}>The tempting <span className={styles.em}>adjacencies.</span></h2>
          <p>
            No proprietary model. No in-house app store. No payments business.
            No ads, now or ever. No identity monopoly. Each one is, on its
            own, a viable company. Each one is also a door that, once opened,
            cannot be closed — and Forest exists specifically to not open
            them.
          </p>
        </section>
      </div>
    </article>
  );
}
