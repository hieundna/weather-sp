import React from 'react';
import { CustomizedActiveDot } from './utils';
import { mount } from 'enzyme';

describe('CustomizedActiveDot Component', () => {
    test('renders Sun', () => {
        const wrapper = mount(<CustomizedActiveDot cx={200} cy={200} value={[0,2]}/>);
        const idSun = wrapper.find("[id='Capa_1']");
        const dataTestMoon = wrapper.find("[data-test='moon']");
        expect(idSun.length).toBe(1);
        expect(dataTestMoon.length).toBe(0);
    });
    test('renders Moon', () => {
        const wrapper = mount(<CustomizedActiveDot cx={200} cy={200} value={[1,0]}/>);
        const idSun = wrapper.find("[id='Capa_1']");
        const dataTestMoon = wrapper.find("[data-test='moon']");
        expect(idSun.length).toBe(0);
        expect(dataTestMoon.length).toBe(1);
    });

})