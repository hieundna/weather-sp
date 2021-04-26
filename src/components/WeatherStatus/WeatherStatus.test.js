import React from 'react';
import WeatherStatus from './WeatherStatus.js';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { AppProvider } from '../../contexts/context'

const wrapper = mount(<AppProvider> <WeatherStatus /> </AppProvider>);
describe('WeatherStatus Component', () => {
    test("expect to render WeatherStatus component", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    test('renders without error', () => {
        const weatherStatusComponent = wrapper.find(".main");
        expect(weatherStatusComponent.length).toBe(1);
    });

})