import React from 'react';
import styled from 'styled-components';

const Card = ({ data }) => {
  console.log('dataCard', data);
  return (
    <Wrapper>
      <h2 className="favoris-title">{data}</h2>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .favoris-title {
    background-color: #c0cfd3;
    border-radius: 0.5rem;
    padding: 0.7rem;
    font-size: 2rem;
    line-height: 1.5rem;
    color: #04196a;
    font-family: sans-serif;
    &:hover {
      color: #c0cfd3;
      background-color: #04196a;
      transition: 400ms;
    }
  }
`;

export default Card;
