import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Home from '../../../src/components/Home';

configure({ adapter: new Adapter() });
const middlewares = [ReduxThunk];
const mockStore = configureStore(middlewares);

describe('Home', () => {
  it('should mount Home component', () => {
    const store = mockStore({ venue: { } });
    const wrapper = shallow(<Home
      store={store}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should scroll', () => {
    const store = mockStore({ venue: { } });
    const wrapper = shallow(<Home
      store={store}
    />);
    wrapper.prop('scroll', { deltaY: 50 });
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
