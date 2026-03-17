import styles from "./GameHeader.module.css";
import { Timer } from "../Timer/Timer";

export function GameHeader({ gamewon }) {
  return (
    <div className={styles.gameHeader}>
      <section className={styles.characters}>
        <img src="/images/item1.jpg" alt="" />
        <img src="/images/item2.jpg" alt="" />
        <img src="/images/item3.jpg" alt="" />
      </section>
      <section className={styles.timer}>
        <Timer gamewon={gamewon} />
      </section>
    </div>
  );
}
