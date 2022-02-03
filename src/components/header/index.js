import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.css';

const Header = ({ location }) => {
  const position = location.pathname === '/' ? 'overlay' : 'inbox';
  return (
    <header className={`${styles.wrapper} ${styles[position]}`}>
      <div className="grid x-padded">
        <Link
          className={styles.logo}
          to="/"
          title="Reyraa, Lisk delegate"
        >
            Reyraa
        </Link>
      </div>
    </header>
  );
};

export default Header;
