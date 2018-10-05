import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Venues from '../../../src/components/Venues';
import grabbdData from '../../../src/utils/grabbd.json';

configure({ adapter: new Adapter() });
const middlewares = [ReduxThunk];
const mockStore = configureStore(middlewares);

const user = {
  user_id: '41',
  user_name: 'Shammi Arora',
  user_list: 'dubai',
  user_bio: '',
  user_profile_pic: 'RPNNKU91S7WMY9X1O15DZNH74ZWMZ1G9NRQJYGMUXTWAJQ3SUE3NVSCOJEGMTOAY70N3ONP1FUZHSSYSQERSOD8OVSSU6Q85XOLJP64NG6PGS0KRBHC7WQFUBZBCA2RH.jpeg',
  user_venue_list_photos: [
    'CgIUT9f99HdvLNo2Gi4A9adlFyR3RAQWBp76nTQTLi4b9MT9cC7fZov7SfnmbAjtsBQb82Q1mRIVm6II0AYtIVXym8D1cxneNeqMcpj30cSU6QCi1QvMg3qzllLv4dfO.jpeg',
    '80I45J02WCYO9UC773CEEHGV59V0M9FHQGSXMZZ7P6US6BZ083K205KTQMMXJ4N653Q8H0QNJYPKEVTIP08RFB2L01NLCWBE74YM9Q942AWS5L6TBRX0YAR3MIU0H5R6.jpeg',
    'hym4JcLteKoUxdmTmetK2IJM1haaijYw26cya8p5kb0qf2EyXywjfv8zqBiaKgp2OEk1Mq7xvJWlss60Sjci10HAnLhGJFkRpJU6i2HdXZDJSqiG9OfEH6aluw9S853E.jpg',
  ],
  user_venue_featured_photo: 'YFCypCEC9NtTdJ6pGUUQ2FQDPRYtXnV7pRqt2f6uRhjd9z7SjcdkYcBWj0ObwZ3YVhpcoKSPCv7zNq4fRhMWI0wke2Dnl7WjvyRhAxyl4CXSLmrwD5yACe1rrnh6RMb3.jpg',
  user_loves: '22',
  user_likes: '64',
  user_hates: '2',
  user_try: '208',
};

const venuesData = grabbdData.DATA;
const venuesPagination = { from: 0, to: 5 };

describe('Venues', () => {
  it('should mount Venues component', () => {
    const store = mockStore({ venue: { user, venuesData, venuesPagination } });
    const wrapper = shallow(<Venues store={store} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
