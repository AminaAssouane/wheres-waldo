import { useEffect, useState } from "react";
import styles from "./Leaderboard.module.css";
export function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    async function fetchScore() {
      try {
        const response = await fetch("http://localhost:3000/leaderboard");
        if (!response.ok) throw new Error("Failed to fetch scores.");
        const data = await response.json();
        setScores(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchScore();
  });

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
            {scores.map((score) => (
              <tr key={score.id}>
                <td>{score.id}</td>
                <td>{score.username}</td>
                <td>{score.time}</td>
                <td>{score.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
