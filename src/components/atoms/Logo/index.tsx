import React from 'react';
import Typography from '../Typography';
import styles from './Logo.module.scss';

interface Props {
  className?: string;
}

const Logo = ({ className }: Props) => (
  <Typography
    className={`${styles.Logo} ${className}`}
    variant="h1"
    color="darkest"
  >
    Invision
  </Typography>
);

Logo.defaultProps = {
  className: '',
};

export default Logo;
