import { configure } from 'enzyme';
import configureStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import { venueSelectedAction, getVenuesListAction } from '../../src/actions';
import grabbdData from '../../src/utils/grabbd.json';

const middlewares = [ReduxThunk];
const mockStore = configureStore(middlewares);
configure({ adapter: new Adapter() });

let store;
beforeEach(() => { // Runs before each test in the suite
  store = mockStore();
  store.clearActions();
});

const venue = grabbdData.DATA[0];
describe('venueSelectedAction', () => {
  it('Dispatches the correct action and payload error', () => {
    const expected = [{
      payload: {
        venue_city: 'Dubai',
        venue_friends: [{
          friend_follow: 'Yes', friend_id: '1498', friend_name: 'Rasha Al Sharif', friend_profile_pic: 'haDVsLF9FwtTKeeXF7X9s3bmdkCQHkUd46oJexyOVDymfBH3i5EQga42MWvhvUagNB4tdceKyAdxauOdCa7S0mNliSPpgLnd35sFCq4Ssm2yxs1oKdMBOduyzDKcdRyZ.jpeg', friend_state: 'Try',
        }, {
          friend_follow: 'Yes', friend_id: '7881', friend_name: 'Doodle Diaries DXB', friend_profile_pic: 'qflQcp9vTNWX5hHB2KOQgL2b3QDwH3Jvee7pDA916xFxV3OdKvJVSkObjla6DOR8Y8W9CPpG5N7XwZ5U992jH0iNcF5Y9zR7kO0zNKl5vCXyr6u4ZmogcxpooUg2a0V5.jpg', friend_state: 'Love',
        }],
        venue_id: '404046',
        venue_miles: '4051.40',
        venue_name: 'Qasr Al Sarab Desert Resort by Anantara',
        venue_photo: 'http://d6ejh6ps4xec6.cloudfront.net/780X780/venue/CtnLHjCtgmf4AWZ10SPm9NfuXUEquC5JnBKtLguhumJj6t7jVQb4EqseVonJetWNWLtBXTNCHbX20ve5yydz6ezHwv6SrXWWgNyxS7TFTAdjhH6GtxWsJsM4jROzjIR4.jpg',
      },
      type: 'venue',
    }];
    store.dispatch(venueSelectedAction(venue));
    expect(store.getActions()).toEqual(expected);
  });
});

describe('getVenuesListAction', () => {
  it('Dispatches the correct action and payload error', () => {
    const venuesPagination = { from: 0, to: 5 };
    store.dispatch(getVenuesListAction(venuesPagination));
    expect(store.getActions().length).toBeGreaterThan(0);
  });
});
