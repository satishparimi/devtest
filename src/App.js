import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskManager from './Components/TaskManager/TaskManager';
import WebElements from './Components/WebElements/WebElements'

class App extends Component {
  render() {
    return (
      <div >
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        
        <TaskManager/>
        <WebElements/>
      </div>
    );
  }
}

export default App;
