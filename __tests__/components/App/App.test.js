// import React from 'react';
// import { Route } from 'react-router-dom';
// import { shallow, configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import toJson from 'enzyme-to-json';
// import Home from '../../../src/components/Home';
// import App from '../../../src/components/App';
// import 'jest-localstorage-mock';

// configure({ adapter: new Adapter() });

// describe('Home', () => {
//   it('renders correct routes', () => {
//     const wrapper = shallow(<App />);
//     const pathMaps = wrapper.find(Route).reduce((pathMap, route) => {
//       const routeProps = route.props();
//       const pathmap = pathMap;
//       pathmap[routeProps.path] = routeProps.component;
//       return pathmap;
//     }, {});
//     expect(pathMaps['/']).toBe(Home);
//   });

//   it('renders correct routes', () => {
//     const wrapper = shallow(<Home />);
//     expect(toJson(wrapper)).toMatchSnapshot();
//   });
// });
