import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [message, setMessage] = useState('Hello World from react1!...');

  setTimeout(() =>
    axios.get('/api/greeting')
    .then(response => {
      setMessage(response.data);
    })
    .catch(error => {
      console.log(error)
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

export default App;
