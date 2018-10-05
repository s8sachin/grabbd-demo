import axios from 'axios';

/* HttpWrapper function for axios
takes object as input params with {method, url, headers and data}
returns a promise
*/
const HttpWrapper = ({
  method, url, data, headers,
}) => axios({
  method,
  url,
  headers,
  data,
});

export default HttpWrapper;
