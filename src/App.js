import React, { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const url = "https://api.adviceslip.com/advice";

  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
    .then(res => res.json())
    .then(data => setData(data.slip.advice))
  }


  useEffect (() => {
    fetchInfo();
  }, [])


  return (
    <div className="App">
      <div className="card">
        <h1 className='heading' >{data}</h1>
        <button className="btn" onClick={fetchInfo}>
          <span>Give Me Advice</span>
        </button>
      </div>
    </div>
  );
}

export default App;
