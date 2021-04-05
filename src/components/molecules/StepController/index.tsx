import React from 'react';
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
  const renderStepsButton = () => {
    const elements = [];
    for (let index = 0; index < stepsQuantity; index += 1) {
      elements.push(
        <StepButton
          active={index + 1 === currentStep}
          onClick={() => changeCurrentStep(index + 1)}
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
