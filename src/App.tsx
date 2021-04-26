import React, { useState } from 'react';
import axios, {AxiosError} from 'axios';

export const App = () => {

  const [message, setMessage] = useState('Hello from react1 client! Trying to fetch greeting node1 server...');

  setTimeout(() =>
    // axios.get('/api/greeting')
    axios.get('https://26h5l3u8kl.execute-api.eu-west-3.amazonaws.com/node1')
    .then(response => {
      setMessage(response.data);
    })
    .catch((error:AxiosError) => {
      const message = `Cannot reach backend node1 server due to ${error.message}`;
      console.log(`error: ${JSON.stringify(error)}`);
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
