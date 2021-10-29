import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Test from './component/test'
import { XinChao, XinChao3} from './component/test'
import Hero from './components/Hero';
import Contact from './components/Contact';
import Header from './components/Header';

// jsx khác html, babel
// async await api, react

class App extends Component {
  render(){
    return (
      // jsx
      <div className="App">
        <div>
      {/* <Hero /> */}
      {/* props */}
      <Header
        //brand="Contact Manager"
        name="JJ"
      />
      <Contact name="TicTock" email="Joe@mail.com" phone=" 09785173562" />
      <Contact
        name="Emilly"
        email="emilly@mail.com"
        phone="
      +849278373"
      />
      {/* <Main img=""/> */}
      {/* <Footer contac="" /> */}
    </div>
      </div>
    );
  }
  
}

export default App;
