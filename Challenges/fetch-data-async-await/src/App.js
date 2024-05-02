import './App.css';
import { useState, useEffect } from 'react';

const request = `https://pokeapi.co/api/v2/pokemon?limit=10`;

function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    const asnycFetch = async () => {
      try {
        const response = await fetch(request);
        if (!response.ok) {
          throw new Error(response.status);
        }
        const fetchedData = await response.json();
        setTimeout(() => {
          setLoading(false);
          setData(fetchedData);
          setErrMsg('');
        }, 3000);
      } catch (err) {
        setLoading(false);
        setErrMsg(err.toString());
      }
    };
    asnycFetch();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (errMsg) {
    return (
      <div>
        <h1>whoopsie!: that was a bad request</h1>
        <p>{errMsg}</p>
      </div>
    );
  }

  return (
    <div>
      {data && (
        <div>
          <h1>Top 10 Pokemon</h1>
          {data.results.map((item, idx) => (
            <div key={idx}>{item.name}</div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App;
