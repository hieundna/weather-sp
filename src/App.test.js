import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const appContainer = () => render(<Router><App /></Router>);
describe('App Container test', () => {
  test('renders summary test', () => {
    const wrapper = appContainer();
    const linkElement = wrapper.getByText(/myENV/i);
    const titleDiv = wrapper.getByText('RAIN');
    const cityName = wrapper.getAllByText('Singapore');
    expect(cityName[0]).toHaveClass('city-name');
    expect(cityName[1]).toHaveClass('option');
    expect(titleDiv).toHaveClass('title-detail');
    expect(linkElement).toBeInTheDocument();
  });
  // test("render match expected", () => {
  //   const wrapper = appContainer();
  //   const appComponent = wrapper.findByTestId("container");
  //   expect(appComponent.length).toEqual(1);
  // });

})
