import { checkForEmailError } from '../../../util/dataValidation/email';
import { checkForPasswordError } from '../../../util/dataValidation/password';
import { isValidRequiredField } from '../../../util/dataValidation/required';
import { SignUpFormModel } from './SignUp';

type ISignUpFormValidation = {
  [key in keyof SignUpFormModel]: (value: string) => string;
};

export const SignUpValidation: ISignUpFormValidation = {
  email: checkForEmailError,
  password: checkForPasswordError,
  fullName: (name: string) => (!isValidRequiredField(name) ? 'Required Field' : ''),
};

export default {};
