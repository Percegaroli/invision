import { checkForEmailError } from '../../../util/dataValidation/email';
import { checkForPasswordError } from '../../../util/dataValidation/password';
import { SignInModel } from './SignIn';

type ISignInFormValidation = {
  [key in keyof SignInModel]: (value: string) => string;
};

export const SignInValidation: ISignInFormValidation = {
  email: checkForEmailError,
  password: checkForPasswordError,
};

export default {};
