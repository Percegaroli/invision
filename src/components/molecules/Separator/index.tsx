import React from 'react';
import Typography from '../../atoms/Typography';
import styles from './Separator.module.scss';

interface Props {
  text: string
  className?: string;
}

const Separator = ({ text, className }: Props) => (
  <div className={`${styles.Container} ${className}`}>
    <div className={styles.Separator} />
    <Typography variant="h5">
      {text}
    </Typography>
    <div className={styles.Separator} />
  </div>
);

Separator.defaultProps = {
  className: '',
};

export default Separator;
