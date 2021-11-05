import React, { Component } from 'react'
import './App.css';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import AddContact2 from './components/contacts/AddContactUnControlledComponent';

import Header from './components/layout/Header';

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
           <AddContact />
            {/* <AddContact2 /> */}

          </div>
        </div>
      </Provider>
    );
  }

}

export default App;
