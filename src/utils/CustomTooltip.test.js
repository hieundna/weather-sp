import React from 'react';
import {CustomTooltip} from './utils';
import { shallow } from 'enzyme';

describe('CustomTooltip Component', () => {
    test("expect to render CustomTooltip component", () => {
        const wrapper = shallow(<CustomTooltip payload={[{value: 3.0, title: 'tide'}]} active={true}/>);
        expect(wrapper.find('.custom-tooltip')).toHaveLength(1);
    })

})