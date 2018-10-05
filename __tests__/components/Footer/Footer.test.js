import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../../../src/components/Footer';

configure({ adapter: new Adapter() });

describe('Footer', () => {
  it('should render Footer component', () => {
    const wrapper = shallow(<Footer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
