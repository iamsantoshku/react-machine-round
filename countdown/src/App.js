import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>countdown timer</h1>
      <div className="inputcontaine">
        <div className="input-box">
          <input id="hours" placeholder='hh'/>
          <input id="hours" placeholder='hh'/>
          <input id="hours" placeholder='hh'/>
        </div>
        <button className='timer-btn'>start</button>
      </div>
    </div>
  );
}

export default App;
