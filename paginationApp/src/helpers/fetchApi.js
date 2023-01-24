import React from 'react';

export const fetchApi = () => {
  const fetchData = fetch('https://jsonplaceholder.typicode.com/posts').then(
    (res) => res.json()
  );

  return fetchData;
};
