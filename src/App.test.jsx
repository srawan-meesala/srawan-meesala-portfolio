import { render, screen, within } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders the supplied portfolio profile and sections', async () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Srawan Meesala' })).toBeInTheDocument();
  expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute(
    'href',
    'https://drive.google.com/file/d/1VE9VkoktcXT7Pj4eaybEYpuWnrRjhsl_/view?usp=drive_link'
  );
  expect(screen.getByRole('heading', { name: 'Indian Institute of Information Technology, Sri City' })).toBeInTheDocument();
  expect(await screen.findByRole('heading', { name: 'Experience' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Lifeline - A full stack healthcare web application' })).toBeInTheDocument();
  const workSection = within(screen.getByRole('region', { name: 'A closer look' }));
  expect(workSection.getAllByRole('article')).toHaveLength(7);
  const potatoProject = within(workSection.getByRole('article', { name: 'Potato Disease Detection' }));
  expect(potatoProject.getByRole('link', { name: 'View source' })).toHaveAttribute('href', 'https://github.com/srawan-meesala/potato-disease-detection');
  expect(screen.getByRole('heading', { name: 'Skills & tools' })).toBeInTheDocument();
});
