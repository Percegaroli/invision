import React, { useState } from 'react';
import Typography from '../../atoms/Typography';
import FormInputElement from '../../molecules/FormInputElement';
import styles from './SignInForm.module.scss';
import Button from '../../atoms/Button';
import { SignInModel } from '../../../models/forms/SignInForm/SignIn';
import { SignInValidation } from '../../../models/forms/SignInForm/validation';

const initialFormValue: SignInModel = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formState, setFormState] = useState(initialFormValue);
  const [formErrors, setFormErrors] = useState(initialFormValue);
  const [showingError, setShowingError] = useState({
    email: true,
    password: true,
  });

  const changeFormValue = (
    changeEvent: React.ChangeEvent<HTMLInputElement>,
    field: keyof SignInModel,
  ) => {
    const newValue = changeEvent.target.value;
    setFormState({
      ...formState,
      [field]: newValue,
    });
    validateField(newValue, field);
  };

  const validateField = (newValue: string, field: keyof SignInModel) => {
    setFormErrors({
      ...formErrors,
      [field]: SignInValidation[field](newValue),
    });
    setShowingError({
      ...showingError,
      [field]: false,
    });
  };

  const enableShowingError = (field: keyof SignInModel) => {
    setShowingError({
      ...showingError,
      [field]: true,
    });
  };

  const isShowingError = (field: keyof SignInModel) => (showingError[field] ? formErrors[field] : '');

  return (
    <div className={styles.Container}>
      <Typography
        variant="h1"
        color="dark"
        className={styles.Title}
      >
        Welcome to Invision
      </Typography>
      <FormInputElement
        label="User name or Email"
        value={formState.email}
        onChange={(event) => changeFormValue(event, 'email')}
        className={styles.FormInput}
        onBlur={() => enableShowingError('email')}
        error={isShowingError('email')}
      />
      <FormInputElement
        inputType="password"
        label="Password"
        value={formState.password}
        onChange={(event) => changeFormValue(event, 'password')}
        className={styles.FormInput}
        onBlur={() => enableShowingError('password')}
        error={isShowingError('password')}
      />
      <Typography
        color="dark"
        variant="h5"
        className={styles.ForgotPassword}
      >
        Forgot password?
      </Typography>
      <Button
        color="dark"
        className={styles.SignInButton}
      >
        Sign In
      </Button>
    </div>
  );
};

export default SignInForm;
