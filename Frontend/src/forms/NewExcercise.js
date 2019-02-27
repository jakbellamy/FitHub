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
        .catch(error => {
          console.log('didnt work :(', error)
        })
  }

  componentDidMount() { 
      this.fetchTrainers()
  }

  setWorkout = (workout_id) => {this.setState({workout_id})}
  renderFormTwo = () => {
    this.setState({
      formTwo: true
    })}

  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Workout Creator</h1>
        <FormOne trainers={this.state.trainers} renderFormTwo={this.renderFormTwo} setWorkout={this.setWorkout}/>
        {this.state.formTwo ? <FormTwo workout_id={this.state.workout_id}/> : null}
      </div>
    )
  }
}


