import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskManager from './Components/TaskManager/TaskManager';
import WebElements from './Components/WebElements/WebElements'

class App extends Component {
 
  loginHandler = (event) =>{
    alert('logged in sucessfully');
  } 
  render() {
    return (
      <div >
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        
        <TaskManager/>
        <WebElements clicked={(event) =>this.loginHandler(event)}/>
      </div>
    );
  }
}

export default App;
