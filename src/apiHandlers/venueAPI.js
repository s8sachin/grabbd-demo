import HttpWrapper from '../utils/HttpWrapper';

export const getVenueData = () => HttpWrapper({
  method: 'GET', url: 'http://api.grabbd.com/api/v1/customlist', headers: { 'Postman-Token': 'grabbd-react-dev', 'Content-Type': 'application/json' },
});
