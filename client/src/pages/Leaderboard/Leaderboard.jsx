import { useEffect, useState } from "react";
import styles from "./Leaderboard.module.css";
export function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    async function fetchScore() {
      try {
        const response = await fetch(
          "https://wheres-waldo-nnu1.onrender.com/leaderboard",
        );
        if (!response.ok) throw new Error("Failed to fetch scores.");
        const data = await response.json();
        setScores(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchScore();
  }, []);

  return (
    <section className={styles.leaderboard}>
      <h1 className={styles.title}>Leaderboard</h1>
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Place</th>
              <th>Username</th>
              <th>Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score, index) => (
              <tr key={score.id}>
                <td>{index + 1}</td>
                <td>{score.username}</td>
                <td>{score.formattedTime}</td>
                <td>
                  {new Date(score.createdAt).toLocaleString(undefined, {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
