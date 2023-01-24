import axios from 'axios';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=$';
const getDrinks = async (inputText) => {
  const response = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputText}`,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data.drinks;
};
export default getDrinks;
