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
}

const Input = (props: Props) => {
  const {
    value, onChange, className, id, placeholder, type,
  } = props;

  return (
    <input
      className={`${className} ${styles.Input}`}
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      id={id}
    />
  );
};

Input.defaultProps = {
  className: '',
  placeholder: '',
  type: 'text',
};

export default Input;
