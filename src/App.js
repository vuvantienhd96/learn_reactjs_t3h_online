import React, { Component } from 'react'
import './App.css';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import AddContact2 from './components/contacts/AddContactUnControlledComponent';

// khai bao router 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/layout/Header';

// jsx khác html, babel
// async await api, react
import { Provider } from './context'
import About from './components/pages/About';

class App extends Component {
  render() {
    return (
      // jsx
      <Provider>
        <Router>
          <div className="App">
            <Header name="JJ" />
            <Routes>
              <Route path="/" exact element={<Contacts />} />
              <Route path="/addContact" exact element={<AddContact />} />
              <Route path="/about/:id" exact element={<About />} />
            </Routes>
          
            {/* <AddContact2 /> */}
          </div>
        </Router>
      </Provider>
    );
  }

}

export default App;
