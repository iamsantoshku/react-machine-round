import React from 'react'
import "./App.css"

const Contianmodle = ({handlecross, handleaccept}) => {
  return (
    <div className='outer'>
        <div className="box">
            <div className="cross">
                <button onClick={handlecross}>X</button>
            </div>
            <div className="cont">
                <h4>click below the button to accept this offer</h4>
            </div>
            <div className="accept">
                <button onClick={handleaccept}>Accept offer</button>
            </div>
        </div>

      
    </div>
  )
}

export default Contianmodle
