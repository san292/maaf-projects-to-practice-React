import Drink from './Drink';
import { Row, Col } from 'react-bootstrap';
import { useGlobalContext } from '../utils/context/cocktailDataContext';
// import Error from './Error';

const Drinks = () => {
  console.log('drinks');
  const { dataCocktails } = useGlobalContext();
  console.log('drinks data', dataCocktails);

  return (
    <>
      <Row>
        {dataCocktails?.map((cocktail) => (
          <Col key={cocktail.idDrink}>
            <Drink drinkData={cocktail} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Drinks;
