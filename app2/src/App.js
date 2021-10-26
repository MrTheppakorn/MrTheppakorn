import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [list, setList] = useState([]);

  const onAddList = (uName, uAge) => {
    setList((prevUser) => {
      return [...prevUser, { name: uName, age: uAge, id: Math.random().toString() }]
    })
  }

  return (
    <div className="App">
      <AddUser onAddList={onAddList} />
      <UserList list={list} />
    </div>
  );
}

export default App;
