import React, { useState } from 'react';
import { IUser } from './User';

interface UserEditorProps {
  user: IUser
}

export const UserEditor = (props: UserEditorProps) => {

  return (
    <form className="editor">
      <div>
        <label htmlFor='user'>user id</label>
        <input name='user' value={props.user.user} />
      </div>
      <div>
        <label htmlFor='name'>name</label>
        <input name='name' value={props.user.name} />
      </div>
      <button type='button'>save</button>
      <button type='button'>delete</button>
    </form>
  );
}

