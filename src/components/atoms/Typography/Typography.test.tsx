import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Typography from './index';

afterEach(cleanup);

describe('Typography.tsx', () => {
  it('should render without error', () => {
    render(<Typography>Hello World</Typography>);
    screen.getByText('Hello World');
  });

  it('should render an h1 when variant = h1', () => {
    render(<Typography variant="h1">h1</Typography>);
    const element = screen.getByText('h1');
    expect(element.nodeName).toBe('H1');
  });

  it('should render an h2 when variant = h2', () => {
    render(<Typography variant="h2">h2</Typography>);
    const element = screen.getByText('h2');
    expect(element.nodeName).toBe('H2');
  });

  it('should render an h3 when variant = h3', () => {
    render(<Typography variant="h3">h3</Typography>);
    const element = screen.getByText('h3');
    expect(element.nodeName).toBe('H3');
  });

  it('should render an h4 when variant = h4', () => {
    render(<Typography variant="h4">h4</Typography>);
    const element = screen.getByText('h4');
    expect(element.nodeName).toBe('H4');
  });

  it('should render an h5 when variant = h5', () => {
    render(<Typography variant="h5">h5</Typography>);
    const element = screen.getByText('h5');
    expect(element.nodeName).toBe('H5');
  });

  it('should render a p when variant = body', () => {
    render(<Typography variant="body">body</Typography>);
    const element = screen.getByText('body');
    expect(element.nodeName).toBe('P');
  });

  it('should render a p when there is no variant', () => {
    render(<Typography>body</Typography>);
    const element = screen.getByText('body');
    expect(element.nodeName).toBe('P');
  });
});
