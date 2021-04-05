import React from 'react';
import Typography from '../../atoms/Typography';
import StyledLink from '../StyledLink';

interface Props {
  className?: string
}

const NewInvision = ({ className }: Props) => (
  <div className={className}>
    <Typography display="inline">
      New Invision?
      {' '}

    </Typography>
    <StyledLink
      href="/signUp"
      text="Sign Up"
    />
  </div>
);

NewInvision.defaultProps = {
  className: '',
};

export default NewInvision;
