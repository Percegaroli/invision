import React from 'react';
import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import Button from './index';

beforeEach(cleanup);

describe('Button.tsx', () => {
  it('Deve renderizar sem error', () => {
    render(<Button />);
  });

  it('Deve ter como texto a sua prop children', () => {
    render(<Button>Button</Button>);
    screen.getByText('Button');
  });

  it('Deve chamar sua prop onClick quando o usuario pressionar o botao', () => {
    const mockFunction = jest.fn();
    render(<Button onClick={mockFunction}>Button</Button>);
    const buttonElement = screen.getByText('Button');
    fireEvent.click(buttonElement);
    expect(mockFunction).toBeCalled();
  });
});
