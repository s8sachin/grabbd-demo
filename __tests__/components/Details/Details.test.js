import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Details from '../../../src/components/Details';

configure({ adapter: new Adapter() });
const middlewares = [ReduxThunk];
const mockStore = configureStore(middlewares);
const selectedVenue = {
  venue_photo: 'http://d6ejh6ps4xec6.cloudfront.net/780X780/venue/CtnLHjCtgmf4AWZ10SPm9NfuXUEquC5JnBKtLguhumJj6t7jVQb4EqseVonJetWNWLtBXTNCHbX20ve5yydz6ezHwv6SrXWWgNyxS7TFTAdjhH6GtxWsJsM4jROzjIR4.jpg',
  venue_friends: [
    {
      friend_id: '1498',
      friend_name: 'Rasha Al Sharif',
      friend_state: 'Try',
      friend_follow: 'Yes',
      friend_profile_pic: 'haDVsLF9FwtTKeeXF7X9s3bmdkCQHkUd46oJexyOVDymfBH3i5EQga42MWvhvUagNB4tdceKyAdxauOdCa7S0mNliSPpgLnd35sFCq4Ssm2yxs1oKdMBOduyzDKcdRyZ.jpeg',
    },
    {
      friend_id: '7881',
      friend_name: 'Doodle Diaries DXB',
      friend_state: 'Love',
      friend_follow: 'Yes',
      friend_profile_pic: 'qflQcp9vTNWX5hHB2KOQgL2b3QDwH3Jvee7pDA916xFxV3OdKvJVSkObjla6DOR8Y8W9CPpG5N7XwZ5U992jH0iNcF5Y9zR7kO0zNKl5vCXyr6u4ZmogcxpooUg2a0V5.jpg',
    },
    {
      friend_id: '7881',
      friend_name: 'Doodle Diaries DXB',
      friend_state: 'Like',
      friend_follow: 'Yes',
      friend_profile_pic: 'qflQcp9vTNWX5hHB2KOQgL2b3QDwH3Jvee7pDA916xFxV3OdKvJVSkObjla6DOR8Y8W9CPpG5N7XwZ5U992jH0iNcF5Y9zR7kO0zNKl5vCXyr6u4ZmogcxpooUg2a0V5.jpg',
    },
    {
      friend_id: '7881',
      friend_name: 'Doodle Diaries DXB',
      friend_state: 'Hate',
      friend_follow: 'Yes',
      friend_profile_pic: 'qflQcp9vTNWX5hHB2KOQgL2b3QDwH3Jvee7pDA916xFxV3OdKvJVSkObjla6DOR8Y8W9CPpG5N7XwZ5U992jH0iNcF5Y9zR7kO0zNKl5vCXyr6u4ZmogcxpooUg2a0V5.jpg',
    },
  ],
  venue_city: 'Dubai',
  venue_miles: '4051.40',
  venue_name: 'Qasr Al Sarab Desert Resort by Anantara',
  venue_id: '404046',
};

describe('Details', () => {
  it('should mount Details component', () => {
    const store = mockStore({ venue: { selectedVenue } });
    const wrapper = shallow(<Details
      store={store}
      to="100"
      spy
      smooth
      offset={-64}
      duration={500}
      onClick={jest.fn}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
