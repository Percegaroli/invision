import React from 'react';
import styles from './Button.module.scss';

interface Props {
  className?: string;
  onClick?: () => void
  color?: 'dark' | 'lightest'
}

const Button: React.FC<Props> = ({
  children, className, onClick, color,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`${className} ${styles.Button} ${styles[color]}`}
  >
    {children}
  </button>
);

Button.defaultProps = {
  color: 'dark',
  className: '',
  onClick: () => {},
};

export default Button;
