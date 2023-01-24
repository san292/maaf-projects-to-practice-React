import React, { useState, useEffect } from 'react';
import Users from './components/users/Users';
import Input from './components/Input';
import { fetchData } from './utils/fetchData';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [inputDataValue, setInputDataValue] = useState('');

  useEffect(() => {
    fetchData().then((res) => setUsers(res.data));
  }, []);

  const inputValue = (inputText) => {
    setInputDataValue(inputText);
  };

  return (
    <div>
      <Input inputValue={inputValue} />
      <Users users={users} inputData={inputDataValue} />
    </div>
  );
}

export default App;
