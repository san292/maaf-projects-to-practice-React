import React from 'react';

import { useGlobalContext } from '../context/NewApiContext';

const SearchForm = () => {
  const { inputValue, query } = useGlobalContext();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    inputValue(e.target.value);
  };

  return (
    <div className="bg-gray-300 p-2 mb-6">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="tapez votre recherche"
          className="block w-40 text-sm text-slate-500 mt-6 mx-auto p-2 rounded-md border-none"
          onChange={handleChange}
          value={query}
        />
      </form>
    </div>
  );
};

export default SearchForm;
