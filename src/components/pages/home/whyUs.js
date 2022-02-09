import React from 'react';
import styles from './whyUs.css';

const WhyUs = () => (
  <section className={styles.whyUs}>
    <div className={styles.container}>
      <main>
        <header>
          <span>PERKS</span>
          <h3>Why us?</h3>
        </header>
        <div>
          <i>ICON</i>
          <h4>Voting Reward</h4>
          <p className="pFix">
            Helpinghand pays 60% of forging rewards back to voters, self-vote
            naturally excluded. Balances of 0.2+ LSK are distributed every 24
            hours.
          </p>
        </div>
        <div>
          <i>ICON</i>
          <h4>Statistics</h4>
          <p className="pFix">
            Stay up-to-date with live detailed pool, voter and charity fund
            statistics!
          </p>
        </div>
        <div>
          <i>ICON</i>
          <h4>Charity Fund</h4>
          <p className="pFix">
            On top of the 60% voting reward, a static 20% of the forging rewards
            will be reserved to support the less fortunate from around the
            world. Check our Charity Fund explainer for more information.
          </p>
        </div>
        <div>
          <i>ICON</i>
          <h4>Scalable infrastructure</h4>
          <p className="pFix">
            Maintained by an IT professional and Lisk ICO participant, we run
            mainnet and testnet nodes to stay up to date with all the latest
            Lisk changes and updates.
            {' '}
          </p>
        </div>
      </main>
    </div>
  </section>
);

export default WhyUs;
