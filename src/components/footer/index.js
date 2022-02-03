import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../shared/icon';
import styles from './footer.css';

const SocialMediaLink = ({ name, className, path = 'reyraacom' }) => (
  <a
    href={`https://${name}.com/${path}`}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
  >
    <Icon icon={name} />
    <span className={styles.text}>{name}</span>
  </a>
);

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={`${styles.wrapper} x-padded`}>
      <nav aria-label="footer">
        <Link
          to="/terms"
          title="Terms and conditions"
          className={styles.spaced}
        >
          Terms and conditions
        </Link>
        <div className={styles.socialMedia}>
          <span className={styles.spaced}>Find us on</span>
          <SocialMediaLink name="facebook" />
          <SocialMediaLink name="twitter" />
          <SocialMediaLink name="linkedin" path="in/reyraa" />
          <SocialMediaLink name="instagram" className={styles.spaced} />
        </div>
        <span className={styles.copyRight}>
          {`© ${year} All rights reserved for Reyraa.`}
        </span>
      </nav>
    </footer>
  );
};

export default Footer;
