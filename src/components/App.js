import React, { useState } from 'react';
import logo from './../logo.svg';
import './App.css';
import Title from './Title/Title'
import CountDown from './CountDown/CountDown'
import Controller from './controller/Controller'

function App() {

  const [time, usetime] = useState({
    min:0,
    sec:0,
    mili:0
  })

  getStart() {
    setInterval(() => {
      let min = this.state.time.min
      let sec = this.state.time.sec
      let mili = this.state.time.mili


    }, 100)
  }
  

  return (
    <div className="App">
      <div className="container py-3">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <Title /> 
            <CountDown time={ time } />
            <Controller />
          </div>
        </div>  
      </div>
    </div>
  );
}

export default App;
