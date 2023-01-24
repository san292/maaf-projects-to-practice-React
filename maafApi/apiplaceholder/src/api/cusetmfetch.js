import axios from 'axios';
export const customfetch = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts'
});
