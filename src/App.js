import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import HatsPage from './pages/hatspage/HatsPage';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninAndSingup from './pages/sign-in-and-sign-up/sign-in-and-sing-up';
import HomePage from "./pages/homepage/homepage.component";
import {auth,createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser:null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
     if(userAuth){
       const userRef = await createUserProfileDocument(userAuth);
       userRef.onSnapshot(snapShot=>{
        this.setState({
          currentUser:{
            id:snapShot.id,
            ...snapShot.data()
          }
        })
       });
     }else{
       this.setState({currentUser: userAuth});
     }
     
      
    });
    
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SigninAndSingup} />
        </Switch>
      </div>
    );
  }
}

export default App;
