import React, { Component } from 'react'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

export default class FormOne extends Component {

  state = {
    workout: {},
    tags: [],
    formOneSubmit: false
  }

  submitFormOne = () => {
    this.setState({
      formOneSubmit: true
    }, () => {
      this.props.renderFormTwo()
    })} 

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      workout: {
        name: e.target.name.value,
        trainer: e.target.trainer.value,
        keywords: e.target.Keyword.value
      }
    }, () => {
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
          <p>By User #{this.state.workout.trainer}</p>
        </div>
      )
    }
  }
}

