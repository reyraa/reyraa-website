import React, { useEffect } from 'react';
import { Button } from '../../shared/button';
// import { parseQuery } from '../../../utilities/helpers';
// import { unsubscribe } from '../../../utilities/api/newsletter';
import styles from './unsubscribe.css';

const Unsubscribe = () => {
  const result = 1;
  // const params = parseQuery(history.location.search);
  // const [result, setResult] = useState(0);

  useEffect(() => {
    // unsubscribe(params.u, params.e, params.n)
    //   .then(() => {
    //     setResult(1);
    //   })
    //   .catch(() => {
    //     setResult(-1);
    //   });
  }, []);

  return (
    <div className="screen">
      <div className={`${styles.container} box-padding-big-vertical`}>
        <h1>We are sorry to see you leave.</h1>
        {result === 0 ? (
          <p>Please wait while we remove you from our mailing list.</p>
        ) : null}
        {result === 1 ? (
          <p>
            You are unsubscribed. We hope that our newsletters were useful so
            far.
          </p>
        ) : null}
        {result === -1 ? <p>An error happened. Please try later.</p> : null}
        <Button to="/">Back to home page</Button>
      </div>
    </div>
  );
};

Unsubscribe.initState = () => () => new Promise((resolve) => {
  resolve();
});

export default Unsubscribe;
