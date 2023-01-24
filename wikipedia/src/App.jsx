import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import customAxios from './utils/customAxios';

function App() {
  const [searchs, setSearchs] = useState([]);

  const fetchapi = async () => {
    const response = await customAxios.get('', {
      params: {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
        srsearch: 'history'
      }
    });
    setSearchs(response.data.query.search);
    console.log(response.data.query.search);
  };

  useEffect(() => {
    fetchapi();
  }, []);

  return (
    <div className="App">
      {searchs.map((search) => {
        return <Home key={search.pageid} {...search} />;
      })}
    </div>
  );
}

export default App;
