import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ThemedButton from '../ThemedButton';
import * as ThemeContext from '../theme-context';

Enzyme.configure({ adapter: new Adapter() });

describe('Custom useContext hook component', () => {

    it('should mock the context', () => {
        const onChange = jest.fn();
        /**
         * Handles the mocked response when the component runs the useContext Hook
         */
        jest.spyOn(ThemeContext, 'useThemeContext')
            .mockImplementation(() => ThemeContext.themes.dark);

        const wrapper = shallow(<ThemedButton onChange={onChange}/>);
        const btn = wrapper.find('button');
        btn.simulate('click');

        expect(onChange).toHaveBeenCalledTimes(1);
    });
});
