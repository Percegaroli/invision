import React from 'react';
import { render, screen } from '@testing-library/react';
import Typography from './index';

describe('Typography.tsx', () => {
  it('should render without error', () => {
    render(<Typography>Hello World</Typography>);
    screen.getByText('Hello World');
  });
});
