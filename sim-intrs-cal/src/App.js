import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [principal, setprincipal] = useState(0);
  const [rate, setrate] = useState(0);
  const [time, setime] = useState(0);
  const [ans, setans] = useState(0);
  
  const handlechange = ()=>{
    let simple = (principal*rate*time)/100;

    setans(Math.floor(simple));
  }

  useEffect(()=>{
    handlechange();

  },[principal, rate, time]);
  
  return (
    <div className="APP">
      <div className="container">
        <h2>Simple intrest calculater</h2>
        <div className="box1">
          <label htmlFor="">principal</label>
          <input type="number" id='princ' onChange={(e)=>setprincipal(e.target.value)}/>
        </div>
        <div className="box1">
          <label htmlFor="">rate</label>
          <input type="number" id='rat' onChange={(e)=>setrate(e.target.value)} />
        </div>
        <div className="box1">
          <label htmlFor="">time</label>
          <input type="number" id='tim' onChange={(e)=>setime(e.target.value)}/>
        </div>
        <div className="res">
          <h3>simple interest will be {ans}</h3>
        </div>
      </div>
     
    </div>
  );
}

export default App;
