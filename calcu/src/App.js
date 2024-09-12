// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App() {
//   const btn = ['1', '2','3','4','5','6','7','8','9','0','-','+','*','/','=','c']
//   const [numb,setnumb] = useState('');
//   const handlechange = (e)=>{
//     console.log(e.target.value)
//     setnumb(e.target.value);
//   }
//   const handleclick = (e) =>{
//     const id = e.target.id;
//     // console.log(id);
//     if(id === 'c'){
//       setnumb(' ');
//     }
//     else if(id === '='){
//       handlesubmit();
//     }
//     else{
//       setnumb((num)=>(num+id));
//     }
    
//   }

//   const handlesubmit = (e)=>{
//     // e.pree?.preventDefault();ventdefault();
//     e?.preventDefault();
//     try{
//       const ans = eval(numb);
//       setnumb(ans);
//     }
//     catch(err){
//       alert("invalid input")
//     }
//   }
//     return (
//     <div className="App">
//       <h1>simple calculater</h1>
//       <form onSubmit={handlesubmit}>
//       <div className="int">
//         <input type="number" value={numb} onChange={handlechange} />
//       </div>

//       </form>
      
//       <div className="container" onClick={handleclick}>        
//         {
//           btn.map((ite, ind)=>{
//             return <div className="cont">
//               <button id={ite} key={ind}>{ite}</button>
//               </div>

//           })
//         }
        
//       </div>
     
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import './App.css';
function App() {

  const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    '+', '-', '/', '*', '=', 'C', '.'
  ]
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }
  const handleClick = (e) => {
    const id = e.target.id;
    if (id === 'C') {
      setValue('');
    } else if (id === '=') {
      //produce a result
      handleSubmit();
    } else {
      setValue((val) => val + id);
    }
    console.log();
  }

  const handleSubmit = (e) => {
    e?.preventDefault();
    try {
      const ans = eval(value);
      setValue(ans);
    } catch (err) {
      alert("Invalid Inputs")
    }
  }
  console.log(value);
  return (
    <div className="App">
      <h1>Calculator</h1>
      <form
        onSubmit={handleSubmit}
      >
        <input
          value={value}
          onChange={handleChange}
          type='text'
        />
      </form>
      <div className='container'
        onClick={handleClick}
      >
        {
          arr.map((item, idx) => (
            <button
              id={item}
              key={idx}
              className='cell'
            >{item}</button>
          ))
        }
      </div>
    </div>
  );
}

export default App;
