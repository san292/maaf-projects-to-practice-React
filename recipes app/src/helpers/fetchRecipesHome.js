import React from 'react';
import { instance } from '../api/instance';
import Error from '../components/Error/Error';
import axios from 'axios';

export const fetchRecipesHome = async (query) => {
  // const { data } = await instance.get(
  //   // `recipes/4632/card?apiKey=${import.meta.env.VITE_API_KEY}`,
  //   `food/menuItems/search?query=${query}&number=12&apiKey=${
  //     import.meta.env.VITE_API_KEY
  //   }`
  // );
  try {
    const { data } = await instance.get(
      // `recipes/4632/card?apiKey=${import.meta.env.VITE_API_KEY}`,
      `recipes/findByIngredients?ingredients=${query}&apiKey=${
        import.meta.env.VITE_API_KEY
      }
      `
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
