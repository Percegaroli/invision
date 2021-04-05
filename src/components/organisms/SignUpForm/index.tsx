import React, { useState } from 'react';
import { SignUpFormModel } from '../../../models/forms/SignUp';
import Button from '../../atoms/Button';
import Typography from '../../atoms/Typography';
import FormInputElement from '../../molecules/FormInputElement';
import styles from './SignUpForm.module.scss';

const initialFormState: SignUpFormModel = {
  email: '',
  fullName: '',
  password: '',
};

const SignUpForm = () => {
  const [formState, setFormState] = useState(initialFormState);
  const [formError, setFormError] = useState(initialFormState);

  const changeFormValue = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof SignUpFormModel,
  ) => {
    const newValue = event.target.value;
    setFormState({
      ...formState,
      [field]: newValue,
    });
  };

  const submitForm = () => {

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
      />
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
      <Button onClick={submitForm}>
        Sign up
      </Button>
    </div>
  );
};

export default SignUpForm;
