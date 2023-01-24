import { useState, useEffect } from 'react';
import { instance } from '../api/instance';

export const fetchAllRecipes = async () => {
  // le code commenté est où cas où on voudrait
  //  transformer notre function en Hooks personnalisé

  // const [data, setData] = useState([]);

  // const fetchData = async () => {
  try {
    const response = await instance.get(
      `recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}`
    );
    return response.data;
  } catch (error) {
    if (error === 402) return 'votre quota quotidien est atteint';
    console.log(error);
  }

  // setdata(data);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // return {...data, data};
};
