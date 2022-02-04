import React from 'react';
import ReactDOM, { render } from 'react-dom';
// import storeInit from '../store';
import App from '../app';

// const store = storeInit(true);
const store = {};

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

render(
  <App store={store} url={window.location.pathname} context={{}} isClient />,
  document.getElementById('root'),
);
