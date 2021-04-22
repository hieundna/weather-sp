import React from 'react';
import WeatherDetail from './WeatherDetail.js';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Context from '../../contexts/context';

const value = {
    weather: {
        weather: [
            {
                main: "Clouds",
                icon: "03n"
            }
        ],
        main: {
            temp: 28,
            feels_like: 32.57,
            humidity: 83
        }
    }
}

const wrapper = mount(<Context.Provider value={value}> <WeatherDetail /> </Context.Provider>);
describe('WeatherDetail Component', () => {
    test("expect to render WeatherDetail component", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    test('renders without error', () => {
        const weatherDetailComponent = wrapper.find(".col-detail");
        expect(weatherDetailComponent.length).toBe(4);
    });

})