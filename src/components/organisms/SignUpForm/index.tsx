import React, { useState } from 'react';
import { SignUpFormModel } from '../../../models/forms/SignUpForm/SignUp';
import { SignUpValidation } from '../../../models/forms/SignUpForm/validation';
import Button from '../../atoms/Button';
import Typography from '../../atoms/Typography';
import FormInputElement from '../../molecules/FormInputElement';
import Snackbar from '../../molecules/Snackbar';
import styles from './SignUpForm.module.scss';

const initialFormState: SignUpFormModel = {
  email: '',
  fullName: '',
  password: '',
};

const SignUpForm = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(initialFormState);
  const [showingError, setShowingError] = useState({
    email: true,
    password: true,
    fullName: true,
  });
  const [isShowingSnackbar, setIsShowingSnackbar] = useState(false);

  const changeFormValue = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof SignUpFormModel,
  ) => {
    const newValue = event.target.value;
    setFormState({
      ...formState,
      [field]: newValue,
    });
    validateField(newValue, field);
  };

  const validateField = (newValue: string, field: keyof SignUpFormModel) => {
    setFormErrors({
      ...formErrors,
      [field]: SignUpValidation[field](newValue),
    });
    setShowingError({
      ...showingError,
      [field]: false,
    });
  };

  const enableShowingError = (field: keyof SignUpFormModel) => {
    setShowingError({
      ...showingError,
      [field]: true,
    });
  };

  const isShowingError = (field: keyof SignUpFormModel) => (showingError[field] ? formErrors[field] : '');

  const submitForm = () => {
    if (!formErrors.email && !formErrors.password && !!formErrors.fullName
      && formState.email && formState.password && formState.fullName) {
      setIsShowingSnackbar(true);
      setFormState({ ...initialFormState });
      setTimeout(() => setIsShowingSnackbar(false), 4000);
    }
  };

  return (
    <div className={styles.Container}>
      <Typography
        variant="h1"
        color="dark"
        className={styles.Title}
      >
        Getting Started
      </Typography>
      <FormInputElement
        label="Full Name"
        value={formState.fullName}
        onChange={(event) => changeFormValue(event, 'fullName')}
        className={styles.FormInput}
        error={isShowingError('fullName')}
        onBlur={() => enableShowingError('fullName')}
      />
      <FormInputElement
        label="User name or Email"
        value={formState.email}
        onChange={(event) => changeFormValue(event, 'email')}
        className={styles.FormInput}
        error={isShowingError('email')}
        onBlur={() => enableShowingError('email')}
      />
      <FormInputElement
        inputType="password"
        label="Password"
        value={formState.password}
        onChange={(event) => changeFormValue(event, 'password')}
        className={styles.FormInput}
        error={isShowingError('password')}
        onBlur={() => enableShowingError('password')}
      />
      <Button onClick={submitForm}>
        Sign up
      </Button>
      {isShowingSnackbar ? <Snackbar message="Sign up sucessfully!" /> : null}
    </div>
  );
};

export default SignUpForm;
