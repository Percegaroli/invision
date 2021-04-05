import React, { useState } from 'react';
import Input, { InputType } from '../../atoms/Input';
import Typography from '../../atoms/Typography';
import styles from './FormInputElement.module.scss';

interface Props {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder?: string;
  className?: string
  inputType?: InputType
}

const FormInputElement = ({
  value, onChange, label, className, placeholder, inputType,
}: Props) => {
  const [id] = useState(`${Math.random()}-${label}`);

  return (
    <div className={`${styles.Container} ${className}`}>
      <label
        className={styles.Label}
        htmlFor={id}
      >
        <Typography
          variant="span"
          color="dark"
          className={styles.LabelText}
        >
          {label}
        </Typography>
      </label>
      <Input
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={inputType}
      />
    </div>
  );
};

FormInputElement.defaultProps = {
  className: '',
  placeholder: '',
  inputType: 'text',
};

export default FormInputElement;
