import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CustomInput from '../CustomInput';

Enzyme.configure({ adapter: new Adapter() });

describe('CustomInput component', () => {
    const wrapper = shallow(<CustomInput />);
    it('render an input field', () => {
        expect(wrapper.find('input').length).toEqual(1);
    });
});