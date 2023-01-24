import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages';
// import { RecipeDetails } from '../pages';
// import { Recipes } from '../pages';

const Router = () => {
  <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/recipes" element={<Recipes />} />
    <Route path="/recipedetails" element={<RecipeDetails />} /> */}
  </Routes>;
};
export default Router;
