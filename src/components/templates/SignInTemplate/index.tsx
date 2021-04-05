import React from 'react';
import { ImageBannerSteps } from '../../../config/ImageBannerStep';
import Logo from '../../atoms/Logo';
import NewInvision from '../../molecules/NewInvision';
import ImagesBanner from '../../organisms/ImagesBanner';
import SignInForm from '../../organisms/SignInForm';
import styles from './SignInTemplate.module.scss';

const SignInTemplate = () => (
  <div className={styles.Container}>
    <ImagesBanner stepsItem={ImageBannerSteps} />
    <div className={styles.FormSection}>
      <Logo className={styles.Logo} />
      <SignInForm />
      <NewInvision />
    </div>
  </div>
);

export default SignInTemplate;
