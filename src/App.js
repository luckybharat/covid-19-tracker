import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './components/login/login'
import Signup from './components/signup/signup'
import Home from './components/home/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,

} from "react-router-dom";
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router>
          <div>
            <div>
              <div>
                <Switch>
                  <Route path="/Login">
                    <Login></Login>
                  </Route>
                  <Route path="/Sign-up">
                    <Signup></Signup>
                  </Route>
                  <Route path="/home">
                    <Home></Home>
                  </Route>
                </Switch>
                <Redirect from="/" to="/home" />
              </div>
            </div>
          </div>
        </Router>
      </div >
    );
  }
}

export default App;
