import React, { Component } from 'react'
import FormOne from './FormOne'

export default class NewExcercise extends Component {
  
  state = {
      view: 'Signup',
      trainers: [],
      formTwo: false
  }

  fetchTrainers = () => {
    fetch('http://localhost:5000/trainers')
        .then(res => res.json())
        .then(trainers => this.setState({ trainers }))
  }

  componentDidMount() { 
      this.fetchTrainers()
  }

  renderFormTwo = () => {this.setState({formTwo: true})}
  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Workout Creator</h1>
        <FormOne trainers={this.state.trainers} />
        {this.state.formTwo ? }
      </div>
    )
  }
}
