import styles from "./TargetBox.module.css";

export function TargetBox({ x, y }) {
  return (
    <div
      className={styles.target}
      style={{
        top: y,
        left: x,
      }}
    />
  );
}
