import Link from "next/link";
import styles from "./page.module.css";

export default function ManifestoPage() {
  return (
    <article className={styles.page}>
      <header className={styles.masthead}>
        <div className={styles.eyebrow}>
          <span className={styles.dot}></span>
          Forest · A manifesto
        </div>
        <h1 className={styles.display}>
          The last intermediary <span className={styles.em}>is the one</span> you
          don't see coming.
        </h1>
        <p className={styles.lede}>
          AI dissolves the two coordination problems — Finding and Trust — that
          made intermediaries necessary in the first place. The companies
          building AI know this. They are racing to become the final, most
          powerful intermediary before you notice the opening.
        </p>
      </header>

      <div className={styles.prose}>
        <section className={styles.section}>
          <div className={styles.sectionNum}>i.</div>
          <h2 className={styles.h2}>The two problems that built the modern economy.</h2>
          <p>
            Every intermediary that has ever mattered exists because of two
            problems. <strong>Finding</strong> — how do you locate the person,
            the service, the good, the answer? <strong>Trust</strong> — once
            found, how do you know the exchange will hold?
          </p>
          <p>
            Amazon solves Finding for products. Google solves Finding for
            information. Uber and Airbnb solve Finding for rides and rooms,
            then quietly collect a fee for solving Trust along the way. Banks,
            credit cards, platforms, marketplaces, app stores — every one of
            them is a toll booth built on the same two problems.
          </p>
          <p>
            The toll was the price of coordination. And coordination was
            genuinely expensive. So we paid.
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionNum}>ii.</div>
          <h2 className={styles.h2}>AI dissolves both.</h2>
          <p>
            An agent that can read the open web, speak to other agents, verify
            credentials, negotiate on your behalf, and settle in seconds has no
            use for a marketplace. It is the marketplace.
          </p>
          <p>
            Finding becomes a query. Trust becomes a signature. The two
            problems that justified every toll booth for forty years are, for
            the first time, tractable at the protocol layer.
          </p>
          <blockquote className={styles.pullquote}>
            The middleman was never the point. The middleman was the cost of
            not having one.
          </blockquote>
          <p>
            This should be the moment the economy opens. Instead, it is the
            moment it is about to close, harder than it ever has.
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionNum}>iii.</div>
          <h2 className={styles.h2}>The convergence.</h2>
          <p>
            Watch what AI companies are actually building, not what they are
            saying. Identity. Wallets. Hardware. Memory. The interface itself.
            Four pieces that, stacked in one company, produce a chokepoint more
            total than anything Google or Apple ever assembled.
          </p>
          <p>
            Because if one company owns <em>who you are</em>, <em>how you pay</em>,{" "}
            <em>what asks on your behalf</em>, and <em>what it remembers about
            you</em> — then Finding and Trust are solved only inside their
            walls. The protocol moment ends before it starts. The web becomes a
            tenant farm again.
          </p>
          <p className={styles.subtle}>
            This is not a conspiracy. It is a logical response to the same
            incentive that has produced every other platform monopoly. Nobody
            has to be a villain for the outcome to be the worst one.
          </p>
        </section>

        <div className={styles.asterism}>⁂</div>

        <section className={styles.section}>
          <div className={styles.sectionNum}>iv.</div>
          <h2 className={styles.h2}>Forest is the structural alternative.</h2>
          <p>
            Not a competitor to ChatGPT. Not a better chatbot. Forest is the{" "}
            <strong>thinnest possible coordination layer</strong> underneath
            the agent economy — an open substrate that refuses, by its own
            architecture, to become the thing it exists to prevent.
          </p>
          <p>Four primitives. Nothing more.</p>
          <ol className={styles.list}>
            <li>
              <strong>Verified identity</strong> — portable, user-owned, not
              rented from a platform.
            </li>
            <li>
              <strong>A user-owned wallet</strong> — payments happen between
              parties, not through us.
            </li>
            <li>
              <strong>An open directory</strong> — public, forkable, nobody's
              property, including ours.
            </li>
            <li>
              <strong>Protocol integrations</strong> — MCP for tools, x402 for
              payments, MPP for discovery. Open specs, not our API.
            </li>
          </ol>
          <p>
            Any interface can sit on top. Any competitor can use the same
            rails. The rails do not belong to Forest. They belong to the
            commons, and Forest is only the foundation that refuses to close
            them.
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionNum}>v.</div>
          <h2 className={styles.h2}>Incorruptibility from architecture, not promises.</h2>
          <p>
            Every platform that has ever enshittified did so after promising it
            wouldn't. The problem was never the promise. The problem was that
            the promise was the only thing holding it back.
          </p>
          <p>
            Forest removes the promise and replaces it with structure. Five
            constraints, irrevocable, written into the charter:
          </p>
          <ol className={styles.list}>
            <li>No transaction revenue. We never take a cut of what passes through.</li>
            <li>No owned data. Your identity and history are yours, portable out.</li>
            <li>No proprietary directory. The registry is public and forkable.</li>
            <li>Full portability. If we fail you, you leave with everything.</li>
            <li>Irrevocable nonprofit charter. No acquisition path exists.</li>
          </ol>
          <p>
            Any one of these, alone, can be walked back. All five together can
            only be honored or abandoned. There is no third path where Forest
            quietly becomes the thing it was built to replace.
          </p>
        </section>

        <div className={styles.asterism}>⁂</div>

        <section className={styles.section}>
          <div className={styles.sectionNum}>vi.</div>
          <h2 className={styles.h2}>A note on what Forest isn't.</h2>
          <p>
            Forest is not a chatbot. The AI interface is an entry point, not
            the product. The real product is the economic layer underneath —
            boring, invisible, and, if we do our work right, the kind of thing
            nobody thinks about until they realize it's the reason their agent
            still works five years from now.
          </p>
          <p>
            Forest is not a protest. We are not asking the incumbents to be
            better. We are building the structural condition under which they
            cannot become what they are otherwise guaranteed to become.
          </p>
          <p>
            Forest is not a product launch. It is a foundation. The thing you
            don't notice, holding up the thing you do.
          </p>
        </section>

        <div className={styles.closing}>
          <h2 className={styles.closingTitle}>
            This is the <em>narrow</em> window.
          </h2>
          <p className={styles.closingBody}>
            The rails of the agent economy are being poured right now. They
            will harden in months, not years. There is one chance to make them
            open, and it is this one.
          </p>
          <div className={styles.closingCta}>
            <Link href="/open-economy" className={styles.btnPrimary}>
              Read the thesis
            </Link>
            <Link href="/product" className={styles.btnGhost}>
              See what we're building
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
