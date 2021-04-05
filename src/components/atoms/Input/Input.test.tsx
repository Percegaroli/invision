import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Input from './index';

beforeEach(cleanup);

describe('Input.tsx', () => {
  it('should render without error', () => {
    render(<Input value="" onChange={() => {}} />);
  });
});
