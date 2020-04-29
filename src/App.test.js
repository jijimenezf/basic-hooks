import React from 'react';
import { render } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';


test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

Enzyme.configure({ adapter: new Adapter() });

describe('Testing the App component', () => {
  const wrapper = shallow(<App />);
  it('should run the test', () => {
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(0);
  })
});
