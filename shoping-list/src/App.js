import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [food, setfood] = useState('');
  const [shopinglis, setshooinglis] = useState([]);

  const handlechange = (e)=>{
    // console.log(e.target.value)
    setfood(e.target.value)

  }
  const fetchitem = async(food)=>{
    const url =
    `https://api.frontendeval.com/fake/food/${food}`;
  console.log(url);
  try {
    const result = await fetch(url);
    console.log(result);
    if (result.status === 200) {
      const data = await result?.json();
      setshooinglis(data);
    }
  } catch (err) {
    console.error('Error: ', err);
  }

  }

  useEffect(()=>{
    if(food.length >= 2){
      fetchitem(food);
    }

  },[food]);

  return (
    <div className="App">
     <h1>My shopikng list</h1>
     <div>
      <input  type='food' onChange={handlechange}/>
     </div>
     <div className="shopinglist">

     </div>

     <div className="bucket">

     </div>
    </div>
  );
}

export default App;
