import React from 'react';
import { useGlobalContext } from '../context/NewApiContext';

const Stories = () => {
  const { hits, removeId } = useGlobalContext();

  return (
    <div className="flex-col justify-center justify-items-center w-11/12 mx-16 bg-gray-500">
      {hits.map((hit) => {
        return (
          <div
            className=" flex-col self-center rounded-md mt-2 p-2 bg-gray-300"
            key={hit.objectID}
          >
            <h2 className="text-blue-400">Auteur : {hit.author}</h2>
            <h3 className="  text-red-400">
              {hit.title ? `Titre : ${hit.title}` : ''}
            </h3>
            <a href={hit.url} target="_blank" rel="noreferrer">
              Lien vers la page
            </a>
            <button className="block" onClick={() => removeId(hit.objectID)}>
              Remove Article
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
