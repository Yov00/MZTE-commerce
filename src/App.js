import React from "react";
import { Switch, Route } from "react-router-dom";
import {connect} from 'react-redux';
import "./App.scss";

import HatsPage from './pages/hatspage/HatsPage';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninAndSingup from './pages/sign-in-and-sign-up/sign-in-and-sing-up';
import HomePage from "./pages/homepage/homepage.component";
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {

  unSubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
     if(userAuth){
       const userRef = await createUserProfileDocument(userAuth);
       userRef.onSnapshot(snapShot=>{
        setCurrentUser({
          currentUser:{
            id:snapShot.id,
            ...snapShot.data()
          }
        });
        
       });
     }else{
      setCurrentUser(userAuth);
     }
      
    });
    
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SigninAndSingup} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);
