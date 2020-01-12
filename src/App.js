import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'; //react-router-dom contains react-router
import './App.css';
import HomePage from './pages/homepage/homepage.component'
 
const HatsPage = (p) =>{
  console.log(p)
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/hats" component={HatsPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
