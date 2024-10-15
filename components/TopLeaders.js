/**
 * @file Makes links to TopLeadersInfo in card form
 * @author Declan de Haas
 */

import Link from "next/link";
import React from "react";
import styles from "../styles/Card.module.css";

const TopLeaders = ({ data }) => {
  return (
    // displays the top 20 leaders in card format
    <div className={styles.grid}>
      {/* maps the data from the API and displays them in a card format and links them to storiesinfo */}
      {data.map((leader) => (
        <Link
          href={`/topleaders/${leader}`}
          key={leader}
          data-testid="TopL-TopLInfo-Link-test"
        >
          <div className={styles.card}>
            <div className={styles.container} data-testid="Top-test">
              <h2>{leader}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopLeaders;
