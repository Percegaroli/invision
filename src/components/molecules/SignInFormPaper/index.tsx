import React from 'react';
import Logo from '../../atoms/Logo';
import Separator from '../Separator';
import SignWithGoogleButton from '../SignWithGoogleButton';
import styles from './SignInFormPaper.module.scss';

interface Props {
  className?: string
}

const SignInFormPaper: React.FC<Props> = ({ children, className }) => (
  <div className={`${styles.Container} ${className}`}>
    <Logo className={styles.Logo} />
    {children}
    <Separator
      text="Or"
      className={styles.Separator}
    />
    <SignWithGoogleButton />
  </div>
);

SignInFormPaper.defaultProps = {
  className: '',
};

export default SignInFormPaper;
