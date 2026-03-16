import styles from "./Card.module.css";
export function Card({ imageUrl, title }) {
  return (
    <article className={styles.card}>
      <img src={imageUrl} alt="" />
      <div className={styles.title}>{title}</div>
      <a href="/game">
        <button className={styles.startBtn}>Start Game</button>
      </a>
    </article>
  );
}
