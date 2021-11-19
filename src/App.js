import React, { Component } from 'react'
import './App.css';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import AddContact2 from './components/contacts/AddContactUnControlledComponent';

// khai bao router 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/layout/Header';

// jsx khác html, babel
// async await api, react
import { Provider } from './context'
// import About from './components/pages/About';
import Footer from './components/layout/Footer';
import About2 from './components/pages/AboutClassComponent';
import Test from './component/test';
import { HookTest } from './component/test'

class App extends Component {
  render() {
    return (
      // jsx
      <Provider>
        <Router>
          <div className="App">
            <Header name="JJ" />
            <HookTest />
            <Switch>
              <Route path="/" exact component={Contacts} />
             
              <Route path="/addContact" exact component={AddContact} />
            
              <Route path="/about/:id" exact component={About2} />
                
              
            </Switch>
            <Footer />
            {/* <AddContact2 /> */}
          </div>
        </Router>

      </Provider>
    );
  }

}

export default App;
