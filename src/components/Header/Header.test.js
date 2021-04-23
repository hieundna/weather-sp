import React from 'react';
import Header from './Header.js';
import { render } from '@testing-library/react';

const setup = () => render(<Header />);
describe('Header Component test', () => {
    test("expect to render Header component", () => {
        const wrapper = setup();
        const title = wrapper.getByRole('myENV-test');
        expect(title).toHaveTextContent('myENV');
        expect(wrapper).toMatchSnapshot();
    })
})