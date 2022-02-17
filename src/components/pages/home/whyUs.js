import React from 'react';
import styles from './whyUs.css';

const WhyUs = () => (
  <section className={styles.whyUs}>
    <div className={`${styles.container} ${styles.fix}`}>
      <main>
        <header>
          <span>PERKS</span>
          <h3>Why us?</h3>
        </header>
        <div>
          <i>ICON</i>
          <h4>practical</h4>
          <p className="pFix">
            we monitorise our competitor&#39;s projects then create impressive
            tools based on user&#39;s wants and lisk features.
          </p>
        </div>
        <div>
          <i>ICON</i>
          <h4>game</h4>
          <p className="pFix">
            in future we create game thats more than fun, in ethereum website
            notes said &#39;games is no longer maintained by developer the items
            that you collect remain you&#39;,in our game your decisions and
            connections remain you.
          </p>
        </div>
        <div>
          <i>icons</i>
          <h4>tools</h4>
          <p className="pFix">
            we focued on lisk app efficency and details to create tools for your
            comfort, our tools Maintained by an IT professional and Lisk ICO
            participant
          </p>
        </div>
        <div>
          <i>ICON</i>
          <h4>reword and widespread</h4>
          <p className="pFix">
            reyraa pays 55% of forging reward back to voters, 30% on.
            {' '}
          </p>
        </div>
      </main>
    </div>
  </section>
);

export default WhyUs;
