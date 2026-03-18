import { useState } from "react";
import styles from "./VictoryModal.module.css";

export function VictoryModal({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmit(inputValue);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>You Found Them All!</h2>
        <p className={styles.subtitle}>
          Enter your name for the leaderboard :{" "}
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Your name..."
            autoFocus
            required
          />
          <button type="submit" className={styles.submitBtn}>
            Submit Score
          </button>
        </form>
      </div>
    </div>
  );
}
