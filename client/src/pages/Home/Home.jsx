import styles from "./Home.module.css";
import { Card } from "../../components/Card/Card.jsx";
export function Home() {
  return (
    <section className={styles.home}>
      <h1 className={styles.title}>Game</h1>
      <Card
        imageUrl="/public/images/universe.jpeg"
        title="Universe Infested"
      ></Card>
    </section>
  );
}
