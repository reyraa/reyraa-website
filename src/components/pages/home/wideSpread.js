import React from 'react';
import styles from './wideSpread.css';

const WideSpread = () => (
  <section className={styles.wrapper}>
    <div className={`${styles.container} ${styles.fix}`}>
      <span>How reword funds are spent</span>
      <h3 className={styles.textColorPrimary}>WideSpread</h3>
      <h5>
        Delegate helpinghand reserves a minimum of 20% of all forging rewards
        (~500 LSK / month) for the Charity Fund.
      </h5>
      <p className={styles.pFix}>
        For our first project in 2021, we have chosen to fund a (water) well in
        Africa which will benefit hundreds of people without proper access to
        water. Other than air itself, water is the most important substance to
        us humans. We strive to help areas that still do not have access to
        fresh/clean water.
      </p>
      <h5>
        Check Charity Statistics for more information on the current state of
        the charity fund, and pending/completed projects.
        {' '}
      </h5>
    </div>
  </section>
);

export default WideSpread;
