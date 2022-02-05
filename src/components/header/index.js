import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.css';

const Header = () => (
  <header className={styles.wrapper}>
    <div className={styles.container}>
      <h1>Reyraa</h1>
      <input type="checkbox" id="menu-toggle" />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="menu-toggle" className={styles.hamburgerMenu} />
      <nav>
        <ul>
          <li>
            <input type="checkbox" id="tools-menu" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={styles.name} htmlFor="tools-menu">Tools</label>

            <ul>
              <li>
                <Link
                  to="/tixper"
                  title="Tixer, Lisk transaction creator"
                >
                  Tixer
                </Link>
              </li>
              <li>
                <Link
                  to="/liscover"
                  title="Liscover, Lisk cover maker"
                >
                  Liscover
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <input type="checkbox" id="games-menu" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={styles.name} htmlFor="games-menu">Games</label>

            <ul>
              <li>
                <Link
                  to="/battleship"
                  title="Battleship, a game on Lisk"
                >
                  Battleship
                </Link>
              </li>
              <li>
                <Link
                  to="/wip"
                  title="WIP, a game on Lisk"
                >
                  WIP
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/blog"
              title="News on Lisk"
              className={styles.name}
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
