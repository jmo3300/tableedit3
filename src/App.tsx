import React, { useState } from 'react';

import { UserTableEditor } from './UserTableEditor';

import './App.css';

export const App = () => {

  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <UserTableEditor />
    </div>
  );
}
