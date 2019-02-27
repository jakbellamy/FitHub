import React, { Component } from 'react'
import FormOne from './FormOne'
import FormTwo from './FormTwo'
export default class NewExcercise extends Component {
  
  state = {
      view: 'Signup',
      trainers: [],
      formTwo: false,
      workout_id: null
  }

  fetchTrainers = () => {
    fetch('http://localhost:5000/trainers')
        .then(res => res.json())
        .then(trainers => this.setState({ trainers }))
  }

  componentDidMount() { 
      this.fetchTrainers()
  }

  renderFormTwo = () => {
    this.setState({
      formTwo: true,
      workout_id: 
    })}
  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Workout Creator</h1>
        <FormOne trainers={this.state.trainers} renderFormTwo={this.renderFormTwo}/>
        {this.state.formTwo ? <FormTwo /> : null}
      </div>
    )
  }
}
