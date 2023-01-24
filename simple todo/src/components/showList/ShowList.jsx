import React from 'react';
import styled from 'styled-components';

const ShoxText = ({ texts, setTexts, setEditTodo }) => {
  const handleUpdatde = (text) => {
    console.log('text 8', text);
    setTexts(
      texts.map((item) => {
        if (item.id === text.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleDelete = ({ id }) => {
    setTexts(texts.filter((text) => text.id != id));
  };

  const handleEdit = ({ id }) => {
    console.log('id,', id);
    const findText = texts.filter((text) => text.id === id);
    setEditTodo(findText);
    console.log('texts', texts);
  };

  return (
    <Wrapper>
      {texts.map((txt) => {
        return (
          <div className="container-ul" key={txt.id}>
            <ul className="showtext-ul">
              <li type="text">{txt.title}</li>
            </ul>
            <button className="shotext-btn2" onClick={() => handleEdit(txt)}>
              Edit
            </button>
            <button className="shotext-btn2" onClick={() => handleUpdatde(txt)}>
              Update
            </button>

            <button className="shotext-btn3" onClick={() => handleDelete(txt)}>
              Delete
            </button>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .showtext-ul {
    list-style: none;
    margin-top: 0.4rem;
    text-align: center;
    width: 100%;
    background-color: #1c1c1d;
    padding: 0.4rem;
    border-radius: 0.4rem;
    font-size: 1.2rem;
  }
  .container-ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .shotext-btn1 {
    background-color: blue;
  }
  .shotext-btn2 {
    background-color: green;
  }
  .shotext-btn3 {
    background-color: red;
  }
`;

export default ShoxText;
