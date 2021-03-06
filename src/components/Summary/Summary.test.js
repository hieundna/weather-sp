import React from 'react';
import Summary from './Summary.js';
import { render } from '@testing-library/react';
import { AppProvider } from '../../contexts/context.js';

const setup = () => render(<AppProvider><Summary /></AppProvider> );
describe('Summary Component test', () => {
    test("expect to render Summary component", () => {
        const wrapper = setup();
        const title = wrapper.getByRole('summary');
        expect(title).toHaveClass('weather-sumary');
        expect(wrapper).toMatchSnapshot();
    })
})