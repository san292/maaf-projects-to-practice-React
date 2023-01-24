import React, { useState, useEffect } from 'react';
import { instance } from '../../api/instance';
import axios from 'axios';

import Recipe from '../Recipe/Recipe';
import { fetchAllRecipes } from '../../helpers/fetchAllRecipes';
import { Container, Row } from 'react-bootstrap';

const RecipesAll = () => {
  const [recipesData, setRecipesdata] = useState([]);
  useEffect(() => {
    fetchAllRecipes().then((res) => setRecipesdata(res.results));
  }, []);

  return (
    <div className="row m-2">
      {recipesData?.map((recip) => (
        <Row className="col" key={recip.id}>
          <Recipe recipe={recip} key={recip.id} />
        </Row>
      ))}
    </div>
  );
};

export default RecipesAll;
