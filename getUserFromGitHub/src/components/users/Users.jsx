import React from 'react';

import './Users.css';

const Users = ({ users, inputData }) => {
  const user = users.filter((user) =>
    user.login.toLowerCase().includes(inputData.toLowerCase())
  );

  return (
    <div id="gradient">
      <ul id="container">
        {user.map((user) => (
          <li key={user.id} id="card">
            <img src={user.avatar_url} />
            <h2>{user.login}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
