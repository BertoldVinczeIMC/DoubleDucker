import React,{useState, useEffect} from 'react';

import Login from './components/login';
import Panel from './components/panel';

import "./index.css";


export default function App() {
  const [token, setToken] = useState(localStorage.getItem('doubleducker-token'));

  useEffect(() => {
    if (token){
      localStorage.setItem('doubleducker-token', token);
    }
  }, [token]);

  return (
    <div className="App">
      {token ? <Panel /> : <Login setToken={setToken} />}
    </div>
  );
}