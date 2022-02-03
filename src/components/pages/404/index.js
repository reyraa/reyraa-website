import React from 'react';
import { Link } from 'react-router-dom';
import styles from './404.css';

const Error500 = () => (
  <div className={`${styles.wrapper} x-padded`}>
    <h1>Sorry!</h1>
    <h2>We couldn&#39;t find the page you requested.</h2>
    <section className="y-2x-padded">
      <h5>You might like to visit these pages instead</h5>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Terms and conditions</Link></li>
        </ul>
      </nav>
    </section>
  </div>
);

Error500.initState = () => () => new Promise((resolve) => {
  resolve();
});


export default Error500;
