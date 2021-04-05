import React from 'react';
import Typography from '../../atoms/Typography';
import styles from './Snackbar.module.scss';

interface Props {
  message: string
}

const Snackbar = ({ message }: Props) => (
  <div className={styles.Snackbar}>
    <Typography
      align="center"
      variant="h5"
      color="lightest"
    >
      {message}
    </Typography>
  </div>
);

export default Snackbar;
