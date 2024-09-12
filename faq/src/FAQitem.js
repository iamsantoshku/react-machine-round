import React, { useEffect, useState } from 'react'
import "./App.css"

const FAQitem = ({ite, ind}) => {

    const [isshow, setisshow] = useState('');
    useEffect(()=>{
        if(ind == 0){
            setisshow(true)
        }
    })
    const handlechane = ()=>{
        // setisshow(true);
        if(!isshow ? setisshow(true):setisshow(false));
    }
  return (
   <div className="container">
    <div className="que">
        {ite.question}

    </div>
    <button   onClick={handlechane} >></button>
    {
      isshow  &&  <div className="ans">
    {ite.answer} </div>

    }
    
   </div>
  )
}

export default FAQitem
