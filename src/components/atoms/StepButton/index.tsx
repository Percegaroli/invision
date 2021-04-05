import React from 'react';
import styles from './StepButton.module.scss';
import Button from '../Button';

interface Props {
  active: boolean;
  onClick: () => void;
  className?: string
}

const StepButton = ({ active, onClick, className }: Props) => (
  <Button
    className={`${active ? styles.Active : styles.Inactive} ${className} ${styles.Button}`}
    onClick={onClick}
  />
);

StepButton.defaultProps = {
  className: '',
};

export default StepButton;
