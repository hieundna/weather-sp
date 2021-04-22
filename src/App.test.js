import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders learn react link', () => {
  render(<Router><App /></Router>);
  const linkElement = screen.getByText(/myENV/i);
  const titleDiv = screen.getByText('RAIN');
  const cityName = screen.getAllByText('Singapore');
  expect(cityName[0]).toHaveClass('city-name');
  expect(cityName[1]).toHaveClass('option');
  expect(titleDiv).toHaveClass('title-detail');
  expect(linkElement).toBeInTheDocument();
});
