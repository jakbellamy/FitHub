import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Header from './components/Header';
import Login from './components/Login';
import Library from './components/Library';
import NewExcercise from './forms/NewExcercise';

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

  render() {
    return (
      <div>
        <Header login={this.switchLogin} signup={this.switchSignup}/>
        {(() => {
        switch(this.state.view) {
          case 'Signup':
            return <Signup />
          case 'Login':
            return <Login temporaryButton={this.temporaryButton}/>
          case 'Library':
            return <Library />
          case 'NewExcercise':
            return <NewExcercise />
          default:
            return <NewExcercise />
        }
      })()}
      </div>
    )
  }
}

export default App;
