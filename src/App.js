import React, { Component } from 'react'
import './App.css';
import Contacts from './components/Contacts';
import Header from './components/Header';

// jsx khác html, babel
// async await api, react

class App extends Component {
  render() {
    return (
      // jsx
      <div className="App">
        <div>
          <Header
            name="JJ"
          />
          <Contacts />
          

          
        </div>
      </div>
    );
  }

}

export default App;
