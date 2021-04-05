import React from 'react';
import Image from 'next/image';
import Button from '../../atoms/Button';
import styles from './SignWithGoogleButton.module.scss';

const SignWithGoogleButton = () => (
  <Button
    color="lightest"
    className={styles.Button}
  >
    <div className={styles.Container}>
      <Image
        src="/icons/google.svg"
        alt=""
        width={29}
        height={30}
        className={styles.Logo}
      />
      <div className={styles.Text}>
        Sign in with Google
      </div>

    </div>
  </Button>
);

export default SignWithGoogleButton;
