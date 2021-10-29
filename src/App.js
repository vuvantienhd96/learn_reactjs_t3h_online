import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Test from './component/test'
import { XinChao, XinChao3} from './component/test'

// jsx khác html, babel
// async await api, react

class App extends Component {
  render(){
    return (
      // jsx
      <div className="App">
        <header className="App-header">
          <Test />
          <XinChao />
          <XinChao3 />
        </header>
      </div>
    );
  }
  
}

export default App;
