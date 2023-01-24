import { useGlobalContext } from '../../utils/context/cocktailDataContext';

const InputSearch = () => {
  const { onChange, inputCocktail } = useGlobalContext();
  console.log('inputSearch', inputCocktail);

  return (
    <div className="input-group mt-4 m-auto" style={{ width: '30rem' }}>
      <input
        type="text"
        className="form-control"
        placeholder="Tapez votre cocktail"
        aria-label="cocktailName"
        onChange={onChange}
        value={inputCocktail}
        autoFocus
      />
    </div>
  );
};

export default InputSearch;
