import { render, screen } from '@testing-library/react';
import App from './App';
yash = 'ASIA2XYQY5Y2SR2FBBWL';
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// without secrets adding
