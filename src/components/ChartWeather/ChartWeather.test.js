import React from 'react';
import ChartWeather from './ChartWeather.js';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Context from '../../contexts/context';

const value = {
    chartData: [
        { hour: '12 a.m', tide: 2.9, sun: 0, night: 8 },
        { hour: '2 a.m', tide: 2.8, sun: 0, night: 8 },
        { hour: '4 a.m', tide: 2.5, sun: 0, night: 8 }
    ]
}

const wrapper = mount(<Context.Provider value={value}> <ChartWeather /> </Context.Provider>);
describe('ChartWeather Component', () => {
    test("expect to render ChartWeather component", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    test('renders without error', () => {
        const chartWeatherComponent = wrapper.find(".chart-type");
        expect(chartWeatherComponent.length).toBe(1);
    });

})