/**
 * @file Makes a link to StoriesInfo in cardfrom
 * @author Declan de Haas
 */

import styles from "../styles/Card.module.css";
import React from "react";
import Link from "next/link";

const Stories = ({ data }) => {
  return (
    <div className={styles.grid}>
      {/* maps the data from the api's and displayes them in a card format and links them to storiesinfo */}
      {data.map((item) => (
        <Link
          href={`/stories/${item.id}`}
          key={item}
          data-testid="Stories-StoriesInfo-Link-test"
        >
          <div className={styles.card}>
            <div className={styles.container} data-testid="Story-page">
              <h2>{item.title}</h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Stories;
