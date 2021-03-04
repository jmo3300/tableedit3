import React, { useState } from 'react';
import axios, {AxiosError} from 'axios';

export const App = () => {

  const [message, setMessage] = useState('Hello from react1 client! Trying to fetch greeting node1 server...');

  setTimeout(() =>
    axios.get('/api/greeting')
    .then(response => {
      setMessage(response.data);
    })
    .catch((error:AxiosError) => {
      const message = `cannot reach backend node1 server due to ${error.message}`
      setMessage(message);
    }),1000

  )
  return (
    <div className="App">
        <p>
          {message}
        </p>
    </div>
  );
}
