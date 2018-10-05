import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import FourOhFour from '../../../src/components/FourOhFour';

configure({ adapter: new Adapter() });

describe('FourOhFour', () => {
  it('should mount FourOhFour component', () => {
    const wrapper = shallow(<FourOhFour />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
