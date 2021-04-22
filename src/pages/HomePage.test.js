import React from 'react';
import HomePage from './HomePage.js';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

const wrapper = mount(<HomePage />);
describe('HomePage Component', () => {
    test("expect to render HomePage component", () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    test('renders without error', () => {
        const homePageComponent = wrapper.find(".container");
        expect(homePageComponent.length).toBe(1);
    });

})