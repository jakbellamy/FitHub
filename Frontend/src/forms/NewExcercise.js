import React, { Component } from 'react'
import FormOne from './FormOne'
import FormTwo from './FormTwo'
export default class NewExcercise extends Component {
  
  state = {
      view: 'Signup',
      formTwo: false,
      workout_id: null
  }


  setWorkout = (workout_id) => {this.setState({workout_id})}
  renderFormTwo = () => {
    this.setState({
      formTwo: true
    })}

  render() {
    return (
      <div style={{marginTop: '10%'}}>
        <h1 style={{textAlign: 'center'}}>Workout Creator</h1>
        <FormOne trainer={this.props.trainer} renderFormTwo={this.renderFormTwo} setWorkout={this.setWorkout}/>
        {this.state.formTwo ? <FormTwo workout_id={this.state.workout_id}/> : null}
      </div>
    )
  }
}


