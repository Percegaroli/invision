import React, { useState } from 'react';
import Typography from '../../atoms/Typography';
import FormInputElement from '../../molecules/FormInputElement';
import styles from './SignInForm.module.scss';
import SignWithGoogleButton from '../../molecules/SignWithGoogleButton';
import Button from '../../atoms/Button';
import { SignInModel } from '../../../models/forms/SignIn';

const initialFormValue: SignInModel = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formState, setFormState] = useState(initialFormValue);
  const [formErrors, setFormErrors] = useState(initialFormValue);

  const changeFormValue = (
    changeEvent: React.ChangeEvent<HTMLInputElement>,
    field: keyof SignInModel,
  ) => {
    const newValue = changeEvent.target.value;
    setFormState({
      ...formState,
      [field]: newValue,
    });
  };

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
      />
      <FormInputElement
        inputType="password"
        label="Password"
        value={formState.password}
        onChange={(event) => changeFormValue(event, 'password')}
        className={styles.FormInput}
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
      {
        /*
      }
      <div className={styles.OrContainer}>
        <Typography>
          Or
        </Typography>
      </div>
      <SignWithGoogleButton />
    */}
    </div>
  );
};

export default SignInForm;
