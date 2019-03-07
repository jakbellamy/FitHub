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
import experimentalWelcome from './components/experiments/experimentalWelcome';
import SideMenu from './components/SideMenu';
import Welcome from './components/Welcome';
import { install } from '@material-ui/styles';
import Workouts from './components/WorkoutShow/Workouts';


class App extends Component {
  state = {
    loggedIn: localStorage.length > 0 ? JSON.parse(localStorage.loggedIn) : null,
    trainer: localStorage.length > 0 ? JSON.parse(localStorage.trainer) : null,
    token: localStorage.length > 0 ? localStorage.token : ''
  }


  loggedIn = () => {
      this.setState({
        loggedIn: true,
        trainer: JSON.parse(localStorage.trainer),
        token: localStorage.token
      })
  }

  logOut = () => {
    localStorage.clear()
    this.setState({
      loggedIn: false,
      trainer: {},
      token: ''
    })
    history.push('/login')
  }

  render() {
    return (
      <div>
        <Router history={history}>
          <>
           <Header loggedIn={this.state.loggedIn} logOut={this.logOut}/>
              <Switch>
                {/* <Route path='/'>{history.push('/login')}</Route> */}
                <Route path='/login'><Login loggedIn={this.loggedIn} trainer={this.state.trainer} setTrainer={this.setTrainerInState}/></Route>
                <Route path='/signup'><Signup history={this.history}/></Route>
                <Route path='/welcome'><Welcome trainer={this.state.trainer} logOut={this.logOut}/></Route>
                <Route path='/stitchlab'><StitchContainer trainer={this.state.trainer}/></Route>
                <Route path='/newexercise'><NewExcercise trainer={this.state.trainer}/></Route>
                <Route path='/workouts'><Workouts trainer={this.state.trainer}/></Route>
              </Switch>
          </>
        </Router>
      </div>
    )
  }
}

export default App;
