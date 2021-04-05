import { isValidRequiredField } from './required';

const isPasswordLengthInvalid = (password: string) => password.length < 6;

export const checkForPasswordError = (password: string) => {
  if (!isValidRequiredField(password)) return 'Required field';
  if (isPasswordLengthInvalid(password)) return 'Password must contain at least 6 characters';
  return '';
};

export default {};
