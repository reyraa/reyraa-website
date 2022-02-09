import React from 'react';
import styles from './howTo.css';

const HowTo = () => (
  <section className={styles.wrapper}>
    <div className={`${styles.container} ${styles.fix}`}>
      <header>
        <span>JOIN US</span>
        <h3>How to vote</h3>
      </header>
      <ul className={styles.step}>
        <li className={styles.stepItem}>
          <div
            className={`${styles.stepContentWrapper} ${styles.step} ${styles.active}`}
          >
            <span className={styles.stepIcon}>1</span>
            <div className={styles.stepContent}>
              <h4 className={styles.stepTitle}>Install Lisk Mobile</h4>
              <span>And sign in, then copy your public key</span>
            </div>
          </div>
        </li>
        <li className={styles.stepItem}>
          <div
            className={`${styles.stepContentWrapper} ${styles.step} ${styles.active}`}
          >
            <span className={styles.stepIcon}>2</span>
            <div className={styles.stepContent}>
              <h4 className={`${styles.stepTitle} ${styles.pbTwo}`}>
                Input your public key here
              </h4>
              <label className={styles.customField} htmlFor="publickey-input">
                <input
                  id="publickey-input"
                  className={styles.inputStyle}
                  type="text"
                  required
                />
                <span className={styles.placeholder}>Public key</span>
              </label>
            </div>
          </div>
        </li>
        <li className={styles.stepItem}>
          <div
            className={`${styles.stepContentWrapper} ${styles.step} ${styles.active}`}
          >
            <span className={styles.stepIcon}>3</span>
            <div className={styles.stepContent}>
              <h4 className={styles.stepTitle}>
                Open the send page in Lisk Mobile
              </h4>
              <span>And scan this QR code</span>
            </div>
          </div>
        </li>
        <li className={styles.stepItem}>
          <div
            className={`${styles.stepContentWrapper} ${styles.step} ${styles.active}`}
          >
            <span className={styles.stepIcon}>4</span>
            <div className={styles.stepContent}>
              <h4 className={styles.stepTitle}>Review and send</h4>
              <span>Thank you for supporting us!</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
);

export default HowTo;
