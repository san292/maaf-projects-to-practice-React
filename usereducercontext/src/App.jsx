import './App.css';
import Posts from './components/Posts';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="flex-col justify-center justify-items-center w-full">
      <SearchForm />
      <Posts />
    </div>
  );
}

export default App;
