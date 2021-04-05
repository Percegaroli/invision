import React from 'react';
import Logo from '../../atoms/Logo';
import Separator from '../Separator';
import SignWithGoogleButton from '../SignWithGoogleButton';
import TermsOfCondition from '../TermsOfCondition';
import styles from './SignInFormPaper.module.scss';

interface Props {
  className?: string
  isSignUp?: boolean
}

const SignInFormPaper: React.FC<Props> = ({ isSignUp, children, className }) => (
  <div className={`${styles.Container} ${className}`}>
    <Logo className={styles.Logo} />
    {children}
    <Separator
      text="Or"
      className={styles.Separator}
    />
    <SignWithGoogleButton />
    {isSignUp && <TermsOfCondition className={styles.Condition} />}
  </div>
);

SignInFormPaper.defaultProps = {
  className: '',
  isSignUp: false,
};

export default SignInFormPaper;
