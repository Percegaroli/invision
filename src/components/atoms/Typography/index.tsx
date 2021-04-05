import React from 'react';
import styles from './Typography.module.scss';

type TypographyColorVariants = 'lightest' | 'dark' | 'medium' | 'darkest'
type TypographyVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body' | 'span'
type TypographyDisplayTypes = 'block' | 'inline'
type TypographyAlign = 'center' | 'left' | 'right'
interface Props {
  className?: string;
  variant?: TypographyVariants
  color?: TypographyColorVariants
  underline?: boolean,
  display?: TypographyDisplayTypes
  align?: TypographyAlign
}

const Typography: React.FC<Props> = ({
  children, className, variant, color, underline, display, align,
}) => {
  const getClassName = () => `${styles[variant] ?? ''} ${className} ${styles[color]} ${underline ? styles.Underline : ''} ${styles[display] ?? ''} ${styles[align] ?? ''} `;

  const renderApropriateElement = () => {
    switch (variant) {
      case 'h1': {
        return (
          <h1 className={getClassName()}>
            {children}
          </h1>
        );
      }
      case 'h2': {
        return (
          <h2 className={getClassName()}>
            {children}
          </h2>
        );
      }
      case 'h3': {
        return (
          <h3 className={getClassName()}>
            {children}
          </h3>
        );
      }
      case 'h4': {
        return (
          <h4 className={getClassName()}>
            {children}
          </h4>
        );
      }
      case 'h5': {
        return (
          <h5 className={getClassName()}>
            {children}
          </h5>
        );
      }
      case 'span': {
        return (
          <span className={getClassName()}>
            {children}
          </span>
        );
      }
      default: {
        return (
          <p className={getClassName()}>
            {children}
          </p>
        );
      }
    }
  };

  return renderApropriateElement();
};

Typography.defaultProps = {
  className: '',
  color: 'dark',
  variant: 'body',
  underline: false,
  display: null,
  align: null,
};

export default Typography;
