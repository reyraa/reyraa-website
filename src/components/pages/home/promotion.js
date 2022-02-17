import React from 'react';
import Typed from 'typed.js';
import styles from './promotion.css';

const Promotion = () => {
  const el = React.useRef(null);

  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        '&quot;fun.&quot;',
        '&quot;practical.&quot;',
        '&quot;creative.&quot;',
        '&quot;widespread.&quot;',
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2>vote for reyraa to make</h2>
        <h2>
          lisk more
          {' '}
          <span ref={el} />
        </h2>
        <h3>Receive 60% voting reward and be at the helm of good works!</h3>
      </div>
    </section>
  );
};
export default Promotion;
