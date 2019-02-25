import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    trainers: [],
    clients: [],
    workouts: []
  }
  
  fetchClients = () => {
    fetch('http://localhost:5000/clients')
        .then(res => res.json())
        .then(clients => this.setState({ clients }))
  }
  
  fetchWorkouts = () => {
    fetch('http://localhost:5000/workouts')
        .then(res => res.json())
        .then(workouts => this.setState({ workouts }))
  }
  
  componentDidMount() {
    this.fetchClients()
    this.fetchWorkouts()
  }
  
  render() {
    return (
        <div>
          <h1>sup</h1>
          {this.state.clients.map( client => <h1>{client.name} is a client of {client.trainer.name}</h1>)}
          {this.state.workouts.map( workout => <h1>the popular exercise {workout.name} belongs to {workout.trainer.name}</h1>)}
        </div>
    )
  }
}

export default App;
