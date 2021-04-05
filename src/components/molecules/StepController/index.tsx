import React, { useEffect, useState } from 'react';
import StepButton from '../../atoms/StepButton';
import styles from './StepController.module.scss';

interface Props {
  stepsQuantity: number;
  currentStep: number
  changeCurrentStep: (nextStep: number) => void
  className?: string
}

const StepController = ({
  stepsQuantity, changeCurrentStep, className, currentStep,
}: Props) => {
  const [automaticInterval, setAutomaticInterval] = useState(null);
  const [shouldChangeStep, setShouldChangeStep] = useState(false);
  const automaticChangeTime = 3000;

  useEffect(() => {
    setAutomaticInterval(setInterval(() => setShouldChangeStep(true), automaticChangeTime));
    return () => clearInterval(automaticInterval);
  }, []);

  useEffect(() => {
    if (shouldChangeStep) {
      changeStepAutomatic();
    }
  }, [shouldChangeStep]);

  const changeStepAutomatic = () => {
    const nextStep = currentStep + 1;
    changeCurrentStep(nextStep > stepsQuantity ? 1 : nextStep);
    setShouldChangeStep(false);
  };

  const onClick = (nextStep: number) => {
    clearInterval(automaticInterval);
    setAutomaticInterval(setInterval(() => setShouldChangeStep(true), automaticChangeTime));
    changeCurrentStep(nextStep);
  };

  const renderStepsButton = () => {
    const elements = [];
    for (let index = 0; index < stepsQuantity; index += 1) {
      elements.push(
        <StepButton
          active={index + 1 === currentStep}
          onClick={() => onClick(index + 1)}
          className={styles.StepButton}
        />,
      );
    }
    return elements;
  };

  return (
    <div className={`${className} ${styles.Container}`}>
      {renderStepsButton()}
    </div>
  );
};

StepController.defaultProps = {
  className: '',
};

export default StepController;
