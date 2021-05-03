import React, { useState } from 'react';
import { initialUser } from './User';

import { UserEditor } from './UserEditor';
import { UserList } from './UserList';

export const UserTableEditor = () => {

  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(initialUser);

  return (
    <div className="tableeditor">
      <UserList setActiveUser = {setActiveUser} />
      <UserEditor user = {activeUser} />
    </div>
  );
}

