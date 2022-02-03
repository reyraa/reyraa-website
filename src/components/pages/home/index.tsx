import React from 'react';
import { Link } from 'react-router-dom';
import styles from './home.css';

const Home = () => (
  <div className={`${styles.wrapper} x-padded`}>
    <h1>Home</h1>
  </div>
);


Home.initState = () => () => new Promise<void>((resolve) => {
  resolve();
});


export default Home;
