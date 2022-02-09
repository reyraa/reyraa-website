import React from 'react';
import Charity from './charity';
import HowTo from './howTo';
import Promotion from './promotion';
import WhyUs from './whyUs';

const Home = () => (
  <div>
    <Promotion />
    <WhyUs />
    <HowTo />
    <Charity />
  </div>
);

Home.initState = () => () => new Promise((resolve) => {
  resolve();
});

export default Home;
