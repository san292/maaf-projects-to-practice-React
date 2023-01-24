import axios from 'axios';
const customAxios = axios.create({
  // baseURL: 'https://en.wikipedia.org/w/'
  baseURL: 'https://en.wikipedia.org/w/api.php'
});
export default customAxios;

export const fetchapi = async () => {
  const response = await customAxios.get('', {
    params: {
      action: 'query',
      list: 'search',
      origin: '*',
      format: 'json',
      srsearch: 'history'
    }
  });
  return response;
};
