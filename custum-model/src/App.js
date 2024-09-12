import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Contianmodle from './Contianmodle';

function App() {
  const [isshow, setisshow] = useState(false);
  const [showans, setshowans] = useState(false);
  const handleshow = ()=>{
    setisshow(true);
  }
  const handlecross = ()=>{
    setisshow(false);
  }
  const handleaccept = ()=>{
      setisshow(false)
      
      setshowans(true);

     
    

  }
  return (
    <div className="App">
     <div className="contain">
      <div className="show">
        <button onClick={handleshow}>show offer</button>
      </div>
      {
        isshow && <Contianmodle handlecross={handlecross} handleaccept={handleaccept}/>
      }
      {
        showans && "offer accepted"
      }

     </div>


    </div>
  );
}

export default App;
