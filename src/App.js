import React, { useState } from 'react';
import styles from './Animation.module.css';

export default function Animation() {
  const [isBouncing, setIsBouncing] = useState(false);

  function handleButtonClick() {
    setIsBouncing(true);
    setTimeout(() => {
      setIsBouncing(false);
    }, 1000);
  }

  return (
    <div className={styles.container}>
      <div
        className={`${styles.box} ${isBouncing ? styles.bounce : ''}`}
      >
        <h2>Advanced Animation Example</h2>
        <p>Hover over the button below to see the animation.</p>
        <button className={styles.button} onClick={handleButtonClick}>
          Bounce!
        </button>
      </div>
    </div>
  );
}



