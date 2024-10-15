/**
 * @file Makes links to Stories and TopLeaders in card form
 * @author Declan de Haas
 */

import styles from "../styles/Card.module.css";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className={styles.gridl}>
      {/* Creates a link to the stories page */}
      <Link
        href="/stories"
        className={styles.link}
        data-testid="Home-Stories-Link-test"
      >
        <div className={styles.card}>
          <div className={styles.container} data-testid="Hacker-News">
            <h2>Hacker News Stories</h2>
          </div>
        </div>
      </Link>
      {/* Creates a link to the topleaders page */}
      <Link
        href="/topleaders"
        className={styles.link}
        data-testid="Home-TopL-Link-test"
      >
        <div className={styles.card}>
          <div className={styles.container} data-testid="Top-Leaders">
            <h2>Top 20 Leaders</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Homepage;
