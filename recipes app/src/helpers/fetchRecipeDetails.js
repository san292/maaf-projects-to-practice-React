import { instance } from '../api/instance';

export const fetchRecipeDetails = async (id) => {
  const { data } = await instance.get(
    `recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}`
  );

  return data;
};
