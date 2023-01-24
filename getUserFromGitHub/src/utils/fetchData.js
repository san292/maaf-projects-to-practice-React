import axios from 'axios';

export const fetchData = async () => {
  const response = await axios.get(`https://api.github.com/users`);

  return response;
};
