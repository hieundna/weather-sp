import React from 'react';
import ChartWeather from './ChartWeather.js';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { AppProvider } from '../../contexts/context'

const wrapper = mount(<AppProvider> <ChartWeather /> </AppProvider>);
describe('ChartWeather Component', () => {
    test("expect to render ChartWeather component", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    test('renders without error', () => {
        const chartWeatherComponent = wrapper.find(".chart-type");
        expect(chartWeatherComponent.length).toBe(1);
    });

})