import React, { Component } from 'react'
import './App.css';
import Contacts from './components/Contacts';
import Header from './components/Header';

// jsx khác html, babel
// async await api, react
import { Provider } from './context'

class App extends Component {
  render() {
    return (
      // jsx
      <Provider>
        <div className="App">
          <div>
            <Header
              name="JJ"
            />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }

}

export default App;
