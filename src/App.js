import React, { Component } from 'react';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import app from './App.css';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <div >
            <Main />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
