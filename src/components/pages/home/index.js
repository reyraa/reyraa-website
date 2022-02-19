import React from 'react';
import WideSpread from './wideSpread';
import HowTo from './howTo';
import Promotion from './promotion';
import WhyUs from './whyUs';

const Home = () => (
  <div>
    <Promotion />
    <WhyUs />
    <HowTo />
    <WideSpread />
  </div>
);

Home.initState = () => () => new Promise((resolve) => {
  resolve();
});

export default Home;
