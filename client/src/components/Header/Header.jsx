import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import waldo from "../../assets/icons/waldo.png";

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <img src={waldo} alt="" />
        Where's waldo
      </h1>
      <nav className={styles.navBar}>
        <Link to="/">Home</Link>
        <Link to="/leaderboard">Leaderboard</Link>
      </nav>
    </header>
  );
}
