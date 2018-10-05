import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Venue from '../../../src/components/Venues/Venue';

configure({ adapter: new Adapter() });
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

const venue = {
  venue_id: '101157',
  venue_name: 'Pots, Pans & Boards',
  venue_latitude: '25.074887421722',
  venue_longitude: '55.12949774457',
  venue_friend_grabbd_state: 'Try',
  venue_city: 'Dubai',
  venue_country: 'United Arab Emirates',
  venue_address: 'The Beach, Opposite Jumeirah Beach Residence (JBR)',
  venue_featured_comment: 'Awesome start to the day-Eggs on curried baked beans and halloumi   flat white   beachside #yum #breakfast',
  venue_featured_comment_user: 'Other grabbr',
  venue_category: 'English Restaurant',
  venue_category_icon: 'SPPYXBG5SJHF1A8PMB6FT1DXZ9P7BJX5XKTUM1BSR3CX3MIEGGM7VIB701BPW1YIALAP3J8RTU8BTVZ4L2A7ASGVCITOII9L3BUIRWCOGB5E0HWQURG5EO03W9WC2MXE.png',
  venue_city_id: '427',
  venue_photo: 'ZTr12eYrtRdGppAAXcvQOZmFz90KUXmQHH95tSPdLnBKulhYsyi8hK4tN2ognlUlTBBGGiZaBmUTtMKwOwVA3fnC0K1xVLwOQJOwQgDTauS50Ah7MfaTtUsdjWQw32Mm.jpeg',
  venue_photo_arr: [
    'aGKbWz6pOBDSJZQ0ycpmYbMXnPZq7If4vBKndKF5ffngQROjIJTXbMaBpBQ7ZKbZfXcdZiniAR5Xw5KDImI6gGbuWPIDT9CQ8Pn0buA9OVU4pjRQ5XWFPe7HKrfmXcgz.jpeg',
    'gpX35rV20RoAfdbAaPEJEmNwaVmBCG2QN2iLZN1SZEwgLbVcLueWcF44oq0jxWXD9KSqhmtYC578H1U81fd3wST62X3WuVeVHlR7ADxCWwQ7D89jTizDD7UYEJUsjJVa.jpg',
    'u3W5TSdSfk9IeNuUzT0ypA8T4pZdAGOjvzVuwaRi1398oY7LBy9gGMEBCfIZzvY566z2n3bYQhudFWHMBwbBK3ZN96E8fE9Ok13g74rohgDM58RyheQLTwX9M0d5B4NU.jpg',
  ],
  venue_grabbd_state: '',
  venue_comment_id: 'ACT_929',
  venue_miles: '4063.80',
  venue_total_grabbd: '10',
  venue_friends: [
    {
      friend_id: '940',
      friend_name: 'Tala Al Deesi',
      friend_state: 'Try',
      friend_follow: 'Yes',
      friend_profile_pic: 'kTAoCMEl0WQS581NJeW0Ldbfa7ts3qax7BiYU5OivseDKFJGROmL2K2rYCI81Ql2EqMb7tyk0nr3OX7L3L3MmYKT1DZggs2tjSzDJbf8z8z0WhGmvtbhS7eZyfbXQ3Tw.jpg',
    },
    {
      friend_id: '1498',
      friend_name: 'Rasha Al Sharif',
      friend_state: 'Try',
      friend_follow: 'Yes',
      friend_profile_pic: 'haDVsLF9FwtTKeeXF7X9s3bmdkCQHkUd46oJexyOVDymfBH3i5EQga42MWvhvUagNB4tdceKyAdxauOdCa7S0mNliSPpgLnd35sFCq4Ssm2yxs1oKdMBOduyzDKcdRyZ.jpeg',
    },
  ],
  venue_featured_comment_user_photo: '76DZR9AN7V7B7BREV7AWQP4HAIMAJC4VR70D3YLVWNFOLIX562UCQC0ZTPKVMITI3DX1O2IPAIM8FXUNVFC9VUX9VWGQKDTZHGO815XLXCJ88K6Y94DBD3FSXW92TBQH.jpg',
  venue_featured_comment_user_name: 'Nicola Ramruthan',
  venue_comment_isliked: 'NO',
  venue_comment_on_comment: [],
  venue_comment_likes: {
    detail: [],
    friend_counter: '0',
    other_counter: '0',
  },
};

describe('Venue', () => {
  it('should mount Venue component', () => {
    const wrapper = shallow(<Venue user={user} venue={venue} height={100} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
