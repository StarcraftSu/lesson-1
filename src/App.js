import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'; //react-router-dom contains react-router
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.util'

class App extends Component {
  constructor(){
    super()

    this.state = {
      currentUser:null
    }
  }
  unsubscribeFromAuth = null
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot=>{
            this.setState({
              currentUser:{
                id: snapShot.id,
                ...snapShot.data()
              }
            })
        })
      }else{
        this.setState({
          currentUser:userAuth //null
        })
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
