import React from 'react';
import Drinks from '../components/Drinks';
import InputSearch from '../components/Form/InputSearch';

const Home = () => {
  console.log('home');
  return (
    <div className="text-center">
      <InputSearch />
      <Drinks />
    </div>
  );
};

export default Home;
