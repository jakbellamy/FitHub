import React, { Component } from 'react'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import { Paper, TextField, Button } from '@material-ui/core';
import FormTwo from './FormTwo';

let updateElementInArray = (array, id, values) => {
	return array.map( (element) => {
		if(element.id == id){
			return { ...element, ...values }
		} else {
			return element
		}
	})
}
export default class FormOne extends Component {

  state = {
    formOneSubmit: false,
    workoutName: '',
    workoutKeywords: '',
    newWorkoutSets: []
  }

  postRequest = (e) => {
    e.preventDefault()
    fetch(`http://localhost:5000/workouts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        keywords: [this.state.keywords],
        trainer: this.props.trainer._id,
        superSets: this.state.newWorkoutSets.map(set => set._id)
      })
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
        trainer: this.props.trainer,
        keywords: [e.target.Keyword.value]
      }
    }, () => {
      this.postRequest(e)
      this.submitFormOne()
    }
    )
  }

  setName = (e) => {this.setState({workoutName: e.target.value})}
  setKeywords = (e) => {this.setState({workoutKeywords: e.target.value})}

  submitWorkout = () => {this.setState({formOneSubmit: true})}


  render() {
    if(!this.state.formOneSubmit){
      return (
        <div style={{alignContent: 'center'}}>
          <Paper style={{margin: '1% 1% 0% 1%', alignContent: 'center'}}>
            <TextField name="name" label="Name of Workout" fullWidth onChange={(e) => {this.setName(e)}} />
          </Paper>  
          <Paper style={{margin: '0% 1% 0% 1%'}}>
            <TextField name="keywords" fullWidth label="Key Word to Identify Workout" onChange={(e) => {this.setKeywords(e)}}/>
          </Paper>
          <Button style={{alignContent: 'center'}} onClick={() => this.submitWorkout()}>Done</Button>
        </div>
      )
    }
    else{
      return(
        <div>
          <h2 style={{textAlign: 'center'}}>{this.state.workoutName}</h2>
          <p style={{textAlign: 'center'}}>({this.state.workoutKeywords})</p>
          <FormTwo />
        </div>
      )
    }
  }
}

