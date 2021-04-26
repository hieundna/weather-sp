import React from 'react';
import Header from './Header.js';
import { render } from '@testing-library/react';
import { AppProvider } from '../../contexts/context'

const setup = () => render(<AppProvider> <Header /> </AppProvider>);
describe('Header Component test', () => {
    test("expect to render Header component", () => {
        const wrapper = setup();
        const title = wrapper.getByRole('myENV-test');
        expect(title).toHaveTextContent('myENV');
        expect(wrapper).toMatchSnapshot();
    });
})