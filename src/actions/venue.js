import {
  VENUE, VENUES_DATA, USER, VENUES_PAGINATION,
} from './types';
import jsonData from '../utils/grabbd.json';

export const venueSelectedAction = venue => (
  (dispatch) => {
    const selectedVenue = {
      venue_photo: `http://d6ejh6ps4xec6.cloudfront.net/780X780/venue/${venue.venue_photo}`,
      venue_friends: venue.venue_friends,
      venue_city: venue.venue_city,
      venue_miles: venue.venue_miles,
      venue_name: venue.venue_name,
      venue_id: venue.venue_id,
    };
    return dispatch({ type: VENUE, payload: selectedVenue });
  }
);

export const getVenuesListAction = ({ from, to }) => (dispatch) => {
  if (from === 0) {
    dispatch({ type: USER, payload: jsonData.USER });
  }
  const venuesData = jsonData.DATA.slice(0, to);
  dispatch({ type: VENUES_DATA, payload: venuesData });
  dispatch({ type: VENUES_PAGINATION, payload: { from, to } });
};
