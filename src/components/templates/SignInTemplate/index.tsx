import React from 'react';
import { ImageBannerSteps } from '../../../config/ImageBannerStep';
import SignInFormPaper from '../../molecules/SignInFormPaper';
import ImagesBanner from '../../organisms/ImagesBanner';
import SignInForm from '../../organisms/SignInForm';
import styles from './SignInTemplate.module.scss';

const SignInTemplate = () => (
  <div className={styles.Container}>
    <ImagesBanner stepsItem={ImageBannerSteps} />
    <SignInFormPaper>
      <SignInForm />
    </SignInFormPaper>

  </div>
);

export default SignInTemplate;
