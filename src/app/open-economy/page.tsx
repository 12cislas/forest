import PageHeader from "@/components/PageHeader";
import styles from "../inner.module.css";

export const metadata = {
  title: "The open economy — Forest",
  description:
    "Finding and Trust are the only two problems intermediaries ever solved. AI makes them cheap. That changes what coordination infrastructure should look like.",
};

export default function OpenEconomyPage() {
  return (
    <article className={styles.page}>
      <PageHeader
        eyebrow="The thesis"
        title="The agent economy needs"
        emphasis="rails,"
        titleTail="not a landlord."
        lede="Forty years of platform monopolies were a tax we paid for coordination we could not do ourselves. AI changes the math. This is the thesis in full."
      />

      <div className={styles.body}>
        <section className={styles.section}>
          <div className={styles.eyebrow}>Premise</div>
          <h2 className={styles.h2}>Two problems, <span className={styles.em}>one century.</span></h2>
          <p>
            Every major platform business of the last four decades exists
            because coordination between strangers is expensive. They solve
            Finding and they solve Trust, and they charge a toll that scales
            with the volume of commerce flowing through them.
          </p>
          <p>
            This was a fair trade when the alternative was worse. It is no
            longer. Language models that can browse, verify, negotiate, and
            settle make the intermediary function itself commoditizable — if,
            and only if, the primitives underneath are open.
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.eyebrow}>Observation</div>
          <h2 className={styles.h2}>The capture is already <span className={styles.em}>priced in.</span></h2>
          <p>
            Incumbents see the same opening you do. They are bidding on
            identity, acquiring wallets, vertically integrating hardware, and
            training models on private data they will never give back. The
            public roadmap looks like "AI assistants." The real roadmap is to
            own the four pieces — identity, payments, interface, data — before
            anyone else can assemble a competing stack.
          </p>
          <p>
            Once those four converge inside a single company, the agent
            economy becomes a walled garden more total than mobile ever was.
            There will be no regulatory fix that arrives in time.
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.eyebrow}>Claim</div>
          <h2 className={styles.h2}>The fix is structural, <span className={styles.em}>not political.</span></h2>
          <p>
            The way out is not a law or a campaign. It is an open substrate
            shipped before the walls are poured — identity, wallet, directory,
            and protocol — held by an institution with a charter that
            forecloses the path to capture.
          </p>
          <p>
            Forest is that substrate. The next section shows what it is, in
            concrete terms.
          </p>
        </section>
      </div>
    </article>
  );
}
