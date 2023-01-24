import React, { useState } from 'react';
import styled from 'styled-components';
import ShowList from '../showList/ShowList';
import Form from '../form/Form';

const Todolist = () => {
  const [inputValue, setInputValue] = useState('');
  const [texts, setTexts] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <Wrapper>
      <>
        <Form
          texts={texts}
          inputValue={inputValue}
          setInputValue={setInputValue}
          setTexts={setTexts}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </>
      <div className="container-text">
        <ShowList texts={texts} setTexts={setTexts} setEditTodo={setEditTodo} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90%;
  height: 100vh;
  display: flex;
  align-items: start;
  justify-content: space-around;
  background-color: black;

  .form-input {
    background-color: gray;
    padding: 1rem;
    border-radius: 1rem;
    margin: 2rem 0;
    color: #fff;
  }
  .container-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 100vh;
    margin-top: 0.5rem;
    background-color: black;
  }
  .contain-text {
    margin-top: 0.2rem;
    background-color: #d7dee1;
  }
`;

export default Todolist;
