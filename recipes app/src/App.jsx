import Navbar from './components/Header/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home, RecipeDetails, Recipes } from './pages';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        {/* <Route path="recirecipes/:id" element={<RecipeDetails />} /> */}
        <Route path="recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </>
  );
}

export default App;
