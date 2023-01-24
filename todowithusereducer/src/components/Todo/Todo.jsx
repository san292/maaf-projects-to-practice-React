import React from 'react';

const Todo = ({ name }) => {
  console.log('todo', name);
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default Todo;
