import React from 'react';
import Typography from '../../atoms/Typography';
import styles from './NewInvision.module.scss';

interface Props {
  className?: string
}

const NewInvision = ({ className }: Props) => (
  <div className={className}>
    <Typography display="inline">
      New Invision?
    </Typography>
    <Typography
      underline
      color="medium"
      display="inline"
      className={styles.Link}
    >
      Create Account
    </Typography>
  </div>
);

NewInvision.defaultProps = {
  className: '',
};

export default NewInvision;
