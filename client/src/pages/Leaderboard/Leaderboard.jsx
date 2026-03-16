import styles from "./Leaderboard.module.css";
export function Leaderboard() {
  return (
    <section className={styles.leaderboard}>
      <h1 className={styles.title}>Leaderboard</h1>
      <div class={styles.tableContainer}>
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
            <tr>
              <td>1</td>
              <td>Amina</td>
              <td>2.029s</td>
              <td>Jul 7, 2024</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Youcef</td>
              <td>2.711s</td>
              <td>Dec 2, 2024</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Yasmine</td>
              <td>3.211s</td>
              <td>Dec 9, 2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
