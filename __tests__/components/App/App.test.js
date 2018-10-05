import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import App from '../../../src/components/App';
import 'jest-localstorage-mock';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders correct routes', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
