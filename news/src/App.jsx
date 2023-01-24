import SearchForm from './components/SearchForm.jsx';
import Stories from './components/stories.jsx';

function App() {
  return (
    <div className="flex-col justify-center justify-items-center   bg-gray-500">
      <SearchForm />
      <Stories />
    </div>
  );
}

export default App;
