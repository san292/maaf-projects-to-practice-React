import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../components/Card/Card';

const Favoris = () => {
  const [addFavorite, setAddFavorite] = useState([]);

  // const getDataStorage = JSON.parse(localStorage.getItem('data'));

  // if (getDataStorage) {
  //   setAddFavorite(getDataStorage);
  // }
  // console.log('addFavorite', addFavorite);
  // const getDataStorage = localStorage.getItem('data');
  // if (getDataStorage) {
  //   return getDataStorage ? JSON.parse(getDataStorage) : [];
  // }

  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem('data'));
    console.log('localStorageItems', localStorageItems);
    if (localStorageItems) {
      const dataFromStorage = localStorageItems.split(' , ');

      setAddFavorite(dataFromStorage);
    }
  }, []);

  for (let i = 0; i < addFavorite.length; i++) {
    console.log(addFavorite[i]);
  }

  return (
    <Wrapper>
      <h1 className="title-favoris">Listes des favoris</h1>
      {addFavorite.map((el, idx) => (
        <Card data={el} key={idx} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .title-favoris {
    font-family: cursive;
  }
`;

export default Favoris;
