import { baseUrl } from './baseUrl';
// import { useContext } from 'react';

// import { inputContext } from '../utils/context/InputValueContext';

// export const configApi = async ({ value }) => {
//   // const [inputSearch, setInputValue] = useContext(inputContext);
//   // const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

//   // const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`).then((res) =>
//   const response = await fetch(`${baseUrl}search.php?s=${value}`).then((res) =>
//     res.json()
//   );
//   return response;
// };
export const configApi = async (value) => {
  const data = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`
  )
    .then((res) => res.json())
    .catch((error) => console.log('errorFetch', error));
  console.log('confiApi', data);

  return data;
};
