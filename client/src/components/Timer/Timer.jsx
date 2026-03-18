import { useEffect } from "react";
import styles from "./Timer.module.css";

export function Timer({ gameWon, time, setTime }) {
  useEffect(() => {
    let interval = null;

    if (!gameWon) {
      // Tick every 10 milliseconds for smooth millisecond display
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [gameWon, setTime]);

  function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    // Get the remainder and divide by 10 to get a 2-digit "centisecond"
    const milliseconds = Math.floor((ms % 1000) / 10);

    return (
      <span className={styles.msTimer}>
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </span>
    );
  }

  return <>{formatTime(time)}</>;
}
