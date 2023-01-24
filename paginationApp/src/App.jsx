import { useState, useEffect } from 'react';
import { fetchApi } from './helpers/fetchApi';
import './App.css';
import Posts from './components/Posts';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchApi().then((d) => setPosts(d));
  }, []);

  return (
    <div className="App">
      <Posts posts={posts} />
    </div>
  );
}

export default App;
