import React from 'react';
import { useGlobalContext } from '../context/PostContext';

const SearchForm = () => {
  const { query, inputValue } = useGlobalContext();

  const inputOnChange = (e) => {
    inputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gray-300 p-2 mb-1  mx-auto w-12/12">
      <form onSubmit={onSubmit}>
        <input
          className=" w-50 text-sm text-slate-500 mb-2 my-2 p-1.5 rounded-md border-none"
          type="text"
          placeholder="Tapez votre titre"
          onChange={inputOnChange}
          value={query}
        />
      </form>
    </div>
  );
};

export default SearchForm;
