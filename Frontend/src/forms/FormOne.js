import React, { Component } from 'react'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

export default class FormOne extends Component {

  state = {
    workout: {},
    tags: [],
    formOneSubmit: false
  }

  postRequest = (e) => {
    e.preventDefault()
    fetch(`http://localhost:5000/workouts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.workout)
    })
    .then(res => res.json())
    .then(res => this.props.setWorkout(res))
  }

  submitFormOne = () => {
    this.setState({
      formOneSubmit: true
    }, () => {this.props.renderFormTwo()})} 

  handleSubmit = (e) => {
    this.setState({
      workout: {
        name: e.target.name.value,
        trainer: e.target.trainer.value,
        keywords: e.target.Keyword.value
      }
    }, () => {
      this.postRequest(e)
      this.submitFormOne()
    }
    )
  }


  render() {
    if(!this.state.formOneSubmit){
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
           <p>Name of Workout: <input name='name' type='text' /></p>
           <p>Trainer: <select name='trainer' style={{textAlign: 'right'}}>
              {this.props.trainers.map(trainer => {
                return <option value={trainer._id}>{trainer.name}</option>
              })}
          </select></p>
          <p>Keywords: <input name='Keyword' type='text' /></p>
          <input type='submit' value='Submit'/>
          </form>
        </div>
      )
    }
    else{
      return(
        <div>
          <h3>{this.state.workout.name}</h3>
          <p>({this.state.workout.keywords})</p>
          <p>By User #{this.state.workout.trainer}</p>
        </div>
      )
    }
  }
}

