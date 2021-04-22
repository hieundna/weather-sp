import React from 'react';
import WeatherStatus from './WeatherStatus.js';
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

const wrapper = mount(<Context.Provider value={value}> <WeatherStatus /> </Context.Provider>);
describe('WeatherStatus Component', () => {
    test("expect to render WeatherStatus component", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    test('renders without error', () => {
        const weatherStatusComponent = wrapper.find(".main");
        // expect(wrapper.props().weather).toEqual('Clouds');
        expect(weatherStatusComponent.length).toBe(1);
    });

})