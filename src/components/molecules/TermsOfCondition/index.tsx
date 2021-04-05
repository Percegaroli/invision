import React from 'react';
import Typography from '../../atoms/Typography';
import StyledLink from '../StyledLink';
import styles from './TermsOfCondition.module.scss';

interface Props {
  className?: string;
}

const TermsOfCondition = ({ className }: Props) => (
  <div className={className}>
    <Typography
      display="block"
      align="center"
      variant="h5"
    >
      By signing up, you agree to Invision
    </Typography>
    <div>
      <Typography
        display="inline"
        underline
        color="medium"
        align="center"
        variant="body"
      >
        {' '}
        Terms of condition
      </Typography>
      <Typography
        display="inline"
        align="center"
        variant="h5"
      >
        {' '}
        and
        {' '}
      </Typography>

      <Typography
        display="inline"
        color="medium"
        underline
        align="center"
        variant="body"
      >
        Privacy Policy
      </Typography>
      <Typography
        className={styles.Link}
        align="center"
      >
        Already on Invision?
        {' '}
        <StyledLink
          href="/signIn"
          text="Sign in"
        />
      </Typography>
    </div>
  </div>
);

TermsOfCondition.defaultProps = {
  className: '',
};

export default TermsOfCondition;
