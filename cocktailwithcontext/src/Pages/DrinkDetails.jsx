import { Link, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { useGlobalContext } from '../utils/context/cocktailDataContext';

const DrinkDetails = () => {
  const { dataCocktails } = useGlobalContext();
  const { id } = useParams();

  const filterData = useMemo(() =>
    dataCocktails.find((cocktail) => cocktail.idDrink === id, [id])
  );

  const {
    strDrinkThumb,
    strDrink,
    strCategory,
    strAlcoholic,
    strInstructions,
    strIngredient1,
    strIngredient2,
    strIngredient3
  } = filterData;

  return (
    <>
      <div
        className="card rounded border-white bg-light mt-4"
        style={{ width: '25rem' }}
      >
        <img src={strDrinkThumb} className="card-img-top w-10" alt={strDrink} />
        <div className="card-body ">
          <h5 className="card-title mt-2">{strDrink}</h5>
          <h6 className="card-title mt-2  text-muted">
            {' '}
            Category : {strCategory}
          </h6>
          <h6 className="card-subtitle mt-2 text-muted">
            Alcoholic : {strAlcoholic}
          </h6>
          <h6 className="card-subtitle mt-2  text-muted">
            Ingredients : {strIngredient1} , {strIngredient2} ,{strIngredient3}
          </h6>

          <p className="card-text mt-2  text-muted">
            {' '}
            <span className="text-dark">Instructions : </span> {strInstructions}
          </p>
        </div>
      </div>

      <Link className="btn btn-outline-secondary m-4" to="/">
        Go to the Home page
      </Link>
    </>
  );
};

export default DrinkDetails;
