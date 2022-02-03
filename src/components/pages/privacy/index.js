import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => (
  <div className="screen">
    <h1>Privacy</h1>
    <Link to="/">Home</Link>
  </div>
);

Privacy.initState = () => () => new Promise((resolve) => {
  resolve();
});

export default Privacy;
