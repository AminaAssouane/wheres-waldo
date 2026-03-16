import styles from "./Footer.module.css";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.credit}>Made by Amina Assouane</div>
      <div className={styles.buttons}>
        <img src={github} alt="" className={styles.github} />
        <img src={linkedin} alt="" className={styles.linkedin} />
      </div>
    </footer>
  );
}
