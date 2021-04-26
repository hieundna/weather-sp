import React from 'react';
import WeatherDetail from './WeatherDetail.js';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { AppProvider } from '../../contexts/context'

const wrapper = mount(<AppProvider> <WeatherDetail /> </AppProvider>);
describe('WeatherDetail Component', () => {
    test("expect to render WeatherDetail component", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    test('renders without error', () => {
        const weatherDetailComponent = wrapper.find(".col-detail");
        expect(weatherDetailComponent.length).toBe(4);
    });

})