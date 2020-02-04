import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'; //react-router-dom contains react-router
import { connect } from 'react-redux'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import Header from './components/header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.util'
import { setCurrentUser } from './redux/user/user.action'

class App extends Component {
  unsubscribeFromAuth = null
  componentDidMount(){
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot=>{
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        })
      }else{
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className='App'>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route exact path="/signin"
            render={()=>this.props.currentUser
            ?(<Redirect to="/"></Redirect>)
            :(<SignInAndSignUpPage/>)}>
          </Route>
        </Switch>
      </div>
    );
  }
}

//mapStateToProps
export default connect(({ user })=>(
  {
    currentUser: user.currentUser
  }
),(dispatch)=>(
  {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
))(App);
