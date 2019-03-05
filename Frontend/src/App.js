import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Header from './components/Header';
import Login from './components/Login';
import NewExcercise from './forms/NewExcercise';
import WorkoutsLibrary from './library/WorkoutsLibrary';
import StitchContainer from './workout stitcher/StitchContainer';
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import {history} from './history'

class App extends Component {
  state = {
    loggedUser: {},
    loggedIn: false
  }

  loginRequest = (e) => {
    e.preventDefault()
    this.setState({
      loggedUser: {
        username: e.target.username.value,
        password: e.target.password.value
      }
    })
 }

  temporaryButton = (e) => {
    history.push('/stitchlab')
  }
  switchLogin = () => (
   <Redirect push to="/login" />,
   console.log('hit')
  )
  
  switchSignup = () => {this.setState({view: 'Signup'})}
  switchLibrary = () => {this.setState({view: 'Library'})}
  switchStitcher = () => {this.setState({view: 'StitchContainer'})}

  
  render() {
    return (
      <>
        <Router history={history}>
          <>
           <Header login={this.switchLogin} signup={this.switchSignup} stitchContainter={this.switchStitcher}/>
              <Switch>
                <Route path='/login'><Login temporaryButton={this.temporaryButton}/></Route>
                <Route path='/signup'><Signup history={this.history}/></Route>
                <Route path='/stitchlab'><StitchContainer /></Route>
                <Route path='/newexercise'><NewExcercise /></Route>
              </Switch>
          </>
        </Router>
      </>
    )
  }
}

export default App;
