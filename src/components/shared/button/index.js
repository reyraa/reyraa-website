import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../icon';
import styles from './button.css';

export const Button = ({
  onClick, to, children, disabled, className = '', title, type,
}) => {
  if (typeof onClick === 'function' || type === 'button' || type === 'submit') {
    return (
      <button
        type="button"
        title={title}
        onClick={onClick}
        className={`${styles.button} ${className}`}
        disabled={disabled === 'disabled'}
      >
        {children}
      </button>
    );
  }
  return (
    <Link
      title={title}
      to={to}
      className={`${styles.button} ${className} ${
        disabled ? styles.disabled : ''
      }`}
    >
      {children}
    </Link>
  );
};

export const IconButton = ({
  icon,
  onClick,
  children,
  className = '',
  iconClassName = '',
  type = 'button',
  disabled,
  title,
}) => (
  <Button
    type={type}
    onClick={onClick}
    className={className}
    disabled={disabled}
    title={title}
  >
    <Icon className={`${styles.icon} ${iconClassName}`} icon={icon} />
    {
      children ? <span className={styles.label}>{children}</span> : null
    }
  </Button>
);
