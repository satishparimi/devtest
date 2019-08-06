import React, { Component } from 'react';

import {BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import LoginPage from './Components/LoginPage/LoginPage'
import HomePage from './Components/HomePage/HomePage';
import TaskManager from './Components/TaskManager/TaskManager';
import Error from './Components/ErrorHandling/Error';
import Navigation from './Components/Navigation/Navigation';

class App extends Component {
 
  loginHandler = (event) =>{
    alert('logged in sucessfully');
  } 

  render() {

    return (


      <BrowserRouter>

        <div>

          <Navigation 
          
          />

          <Switch>
            
            <Route path="/" component={LoginPage} exact />

            <Route path="/home" component={HomePage} />

            <Route path="/task" component={TaskManager} />

            <Route component={Error}/>

          </Switch>
          
        </div>


      </BrowserRouter>

    );
  }
}

export default App;
