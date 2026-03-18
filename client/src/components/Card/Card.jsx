import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export function Card({ imageUrl, title }) {
  return (
    <article className={styles.card}>
      <img src={imageUrl} alt="" />
      <div className={styles.title}>{title}</div>
      <Link to="/game">
        <button className={styles.startBtn}>Start Game</button>
      </Link>
    </article>
  );
}
