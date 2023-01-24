import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Header/Navigation';
import RouteIndex from './routes';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <RouteIndex />
    </BrowserRouter>
  );
}

export default App;
