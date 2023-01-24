import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DetailsApi from '../detailsApi/DetailsApi';
import styled from 'styled-components';
import { customfetch } from '../../api/cusetmfetch';
const Home = () => {
  const [data, setData] = useState([]);
  const fetchApi = async () => {
    const response = await customfetch.get();
    const dataApi = response.data;
    setData(dataApi);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <Container>
      <ul className="container-ul">
        {data.map((el) => {
          const { id } = el;
          return (
            <li className="container-li" key={id}>
              <DetailsApi data={el} />
            </li>
          );
        })}
      </ul>
    </Container>
  );
};
const Container = styled.div`
  .container-ul {
    width: 90%;

    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .container-ul:first-child {
    /* margin-left: 3rem; */
  }

  .container-li {
    width: 1.2rem;
    background-color: #fff;
    color: #2f2f2f;
    border-radius: 1rem;
    padding: 0.2rem;
    margin: 0.3rem;
  }
`;

export default Home;
