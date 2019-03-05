import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Header from './components/Header';
import Login from './components/Login';
import NewExcercise from './forms/NewExcercise';
import WorkoutsLibrary from './library/WorkoutsLibrary';
import StitchContainer from './workout stitcher/StitchContainer';

class App extends Component {
  state = {
    view: '',
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

  temporaryButton = () => {this.setState({view: 'NewExcercise'})}
  switchLogin = () => {this.setState({view: 'Login'})}
  switchSignup = () => {this.setState({view: 'Signup'})}
  switchLibrary = () => {this.setState({view: 'Library'})}
  switchStitcher = () => {this.setState({view: 'StitchContainer'})}

  
  render() {
    return (
      <div>
        <Header login={this.switchLogin} signup={this.switchSignup} stitchContainter={this.switchStitcher}/>

        {(() => {
        switch(this.state.view) {
          case 'Signup':
            return <Signup />
          case 'Login':
            return <Login temporaryButton={this.temporaryButton}/>
          case 'NewExcercise':
            return <NewExcercise switchLibrary={this.switchLibrary}/>
          case 'StitchContainer':
            return <StitchContainer />
          default:
            return <Signup />
        }

      })()}
      </div>
    )
  }
}

export default App;
