import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useCustomFetch from '../helpers/hooks/useCustomFetch';

const DetailsPage = () => {
  const [local, setLocal] = useState([]);
  const { id } = useParams();
  const pars = parseInt(id);
  const { data, loading, error } = useCustomFetch(pars);

  console.log('dataaahvxhvhsvxha', data, loading, error, pars);

  const handleClick = () => {
    const dataFromStorage = () => {
      const localdata = localStorage.getItem('data');
      return localdata ? JSON.parse(localdata) : [];
    };

    const dataToSend = data;

    const test = JSON.stringify(dataToSend);
    const getItem = dataFromStorage();

    if (getItem.length === 0) {
      setLocal(` ${test}`);
    } else if (getItem.includes(test)) {
      setLocal(`${getItem}`);
    } else setLocal(`${getItem},${test}`);

    localStorage.setItem('data', JSON.stringify(local));
  };

  return (
    <>
      <Wrapper>
        <h2>{data.title}</h2>

        <h3>{data.id}</h3>

        <p>{data.body}</p>

        <button onClick={handleClick}>cliquer pour ajouter aux favoris</button>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray;
  padding: 0.5rem;
  border-radius: 0.9rem;
`;

export default DetailsPage;
