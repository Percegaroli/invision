import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ImagesBanner.module.scss';
import Typography from '../../atoms/Typography';
import StepController from '../../molecules/StepController';

interface StepItem {
  imageUrl: string;
  title: string;
  description: string
}
interface Props {
  stepsItem: Array<StepItem>;
  className?: string;
}

const ImagesBanner = (props: Props) => {
  const { stepsItem, className } = props;
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className={`${styles.Container} ${className}`}>
      <Image
        src={stepsItem[currentStep - 1].imageUrl}
        alt=""
        width={705}
        height={530}
      />
      <div className={styles.DescriptionContainer}>
        <Typography
          variant="h1"
          color="lightest"
          align="center"
        >
          {stepsItem[currentStep - 1].title}
        </Typography>
        <Typography
          color="lightest"
          variant="h3"
          className={styles.Description}
          align="center"
        >
          {stepsItem[currentStep - 1].description}
        </Typography>
        <StepController
          changeCurrentStep={setCurrentStep}
          currentStep={currentStep}
          stepsQuantity={stepsItem.length}
        />
      </div>
    </div>
  );
};

ImagesBanner.defaultProps = {
  className: '',
};

export default ImagesBanner;
