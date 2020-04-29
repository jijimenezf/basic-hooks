import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const TestHook = ({ callback }) => {
    callback();
    return null;
};

const testHook = (callback) => {
    mount(<TestHook callback={callback}/>);
};

export default testHook;
