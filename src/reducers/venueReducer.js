import {
  VENUE, VENUES_DATA, USER, VENUES_PAGINATION,
} from '../actions/types';

const INITIAL_STATE = {
  selectedVenue: {
    venue_id: 'dummy',
    venue_photo: 'http://d6ejh6ps4xec6.cloudfront.net/780X780/venue/Goav1E9i5vpHaMKpkatyfxBlXDSDMt7gcUFjVLYhfFhisaL3HWrZiQogaysO5a9RUIsdKqPt2tVMoxZtA8oTkZHUImesMbeVcYipm7ykWVgoOfeIwSm7XVuS5u9LIaoS.jpg',
    venue_friends: null,
    venue_name: 'Select a Venue on the left',
    venue_city: 'city',
    venue_miles: '0',
    // venue_category: 'Category',
    // venue_category_icon:
  },
  user: null,
  venuesData: null,
  venuesPagination: { from: 0, to: 5 },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case VENUE:
    return { ...state, selectedVenue: action.payload };
  case VENUES_DATA:
    return { ...state, venuesData: action.payload };
  case VENUES_PAGINATION:
    return { ...state, venuesPagination: action.payload };
  case USER:
    return { ...state, user: action.payload };
  default:
    return state;
  }
};
