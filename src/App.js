import React, { Component } from 'react';
import { Router, BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <>
          <BrowserRouter>
            <Main />
          </BrowserRouter>
      </>
    );
  }
}

export default App;
