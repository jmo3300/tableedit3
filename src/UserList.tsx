import React, { useState } from 'react';

import { IUser, initialUser } from './User';

interface UserListProps {
  setActiveUser: any
}

const initialUsers = [
  { user: 'hans', name: 'Hans Hansen' },
  { user: 'klaus', name: 'Klaus Klausen' },
  { user: 'karin', name: 'Karin Karuschkke' },
]

export const UserList = (props: UserListProps) => {

  const [users, setUsers] = useState(initialUsers);

  return (
    <div>
      <ul className="list">
        {users.map(user => {
          return (
            <li key={user.user} onClick={() => props.setActiveUser(user)}>
              {user.user} {user.name}
            </li>
          )
        })}
      </ul>
    </div>
  );
}
