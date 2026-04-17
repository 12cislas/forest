import styles from "./PageHeader.module.css";

export default function PageHeader({
  eyebrow,
  title,
  emphasis,
  titleTail,
  lede,
}: {
  eyebrow: string;
  title: string;
  emphasis?: string;
  titleTail?: string;
  lede: string;
}) {
  return (
    <header className={styles.header}>
      <div className={styles.eyebrow}>
        <span className={styles.dot}></span>
        {eyebrow}
      </div>
      <h1 className={styles.title}>
        {title}
        {emphasis && <span className={styles.em}> {emphasis}</span>}
        {titleTail && <> {titleTail}</>}
      </h1>
      <p className={styles.lede}>{lede}</p>
    </header>
  );
}
