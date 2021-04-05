import React from 'react';
import styles from './Input.module.scss';

export type InputType = 'text' | 'password'

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  id: string;
  placeholder?: string
  type?: InputType
  onBlur?: () => void
  isError: boolean
}

const Input = (props: Props) => {
  const {
    value, onChange, className, id, placeholder, type, onBlur, isError,
  } = props;

  return (
    <input
      className={`${className} ${styles.Input} ${isError ? styles.Error : ''}`}
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      onBlur={onBlur}
      id={id}
    />
  );
};

Input.defaultProps = {
  className: '',
  placeholder: '',
  type: 'text',
  onBlur: () => {},
};

export default Input;
