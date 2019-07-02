import React from 'react';
import './App.css';
// import Seun from '../src/component/Seun';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import Clock from './component/clock';
// import Login from './component/Auth/Login';
// import Signup from './component/Auth/Signup';
import Router from '../src/component/Router';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      date: new Date()
    }
  }
  render(){
    return(
   <div class='App-header'>
      {/* <Seun></Seun> */}
      <Clock></Clock>
     <Router></Router>
      </div>
    )
  }
}

export default App;
