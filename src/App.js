import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';
function App() {
  let d = new Date().toLocaleString();
  // let time = d.getTime();
  // useEffect(()=>{
  // })
  const bgArray = ['red','blue','green','yellow','black'];
  const [bgColor, setbgColor] = useState()
  let arrayIndex = 0;
  const changeColor = ()=>{
    //change the bg color
    
    setbgColor(bgArray[arrayIndex]);
    arrayIndex +=1;
    console.log(bgColor);

  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>   
    //   </header>
    // </div>
    <div className='clock'>
      <p onClick={changeColor} style={{backgroundColor:bgColor}}>{d}</p>
    </div>
  );
}

export default App;
