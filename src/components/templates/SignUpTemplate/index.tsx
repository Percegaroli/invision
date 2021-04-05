import React from 'react';
import { ImageBannerSteps } from '../../../config/ImageBannerStep';
import SignInFormPaper from '../../molecules/SignInFormPaper';
import ImagesBanner from '../../organisms/ImagesBanner';
import SignUpForm from '../../organisms/SignUpForm';
import styles from './SignUpTemplate.module.scss';

const SignUpTemplate = () => (
  <div className={styles.Container}>
    <ImagesBanner stepsItem={ImageBannerSteps} />
    <SignInFormPaper isSignUp>
      <SignUpForm />
    </SignInFormPaper>

  </div>
);

export default SignUpTemplate;
