import React, { Component } from 'react'

export default class WorkoutInputs extends Component {
  render() {
    return (
      <div>
         <Paper style={{margin: '1% 1% 0% 1%'}}>
             <TextField name="name" label="Name of Workout" fullWidth onChange={(e) => {this.setName(e)}} />
        </Paper>  
        <Paper style={{margin: '0% 1% 0% 1%'}}>
         <TextField name="keywords" fullWidth label="Key Word to Identify Workout" onChange={(e) => {this.setKeywords(e)}}/>
        </Paper>
        <Button onClick={() => this.submitWorkout()}>Done</Button>
      </div>
    )
  }
}

const workoutReady = 
    <>
   
    </>