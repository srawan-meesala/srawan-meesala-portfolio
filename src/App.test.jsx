import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders the portfolio homepage', () => {
  render(<App />);
  expect(screen.getByText('SRAWAN MEESALA')).toBeInTheDocument();
});
