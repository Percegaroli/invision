import { isValidRequiredField } from './required';

export const isValidEmail = (email: string) => {
  const regexp = /\S+@\S+\.\S+/;
  return regexp.test(email);
};

export const checkForEmailError = (email: string) => {
  if (!isValidRequiredField(email)) return 'Required field';
  if (!isValidEmail(email)) return 'Invalid email';
  return '';
};

export default {};
