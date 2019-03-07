import React, { Component } from 'react'
import SuperSetCard from '../../workout stitcher/SuperSetCard';
import WorkoutCard from './WorkoutCard';
import { Typography } from '@material-ui/core';

export default class Workouts extends Component {
  
  state = {
    workouts: []
  }
  fetchWorkouts = () => {
    fetch('http://localhost:5000/workouts')
    .then(res => res.json())
    .then(workouts => this.setState(
        { workouts: workouts.filter(
            workout => workout.trainer ? workout.trainer._id == this.props.trainer._id : null) 
        }))
    .catch(error => {
      console.log('workouts didnt fetch :(', error)
    })
  }
  componentDidMount(){
      this.fetchWorkouts()
  }

  delFetch = (id) => {
    fetch(`http://localhost:5000/workouts/${id}`, {
        method: 'delete'
    })
  }

  deleteWorkout = (id) => { 
    this.setState({
        workouts: this.state.workouts.filter(workout => workout.id != id)
    }, () => {
        this.delFetch(id)
    })
  }

  render() {
      console.log(this.state.workouts.map(workout => workout.name))
    return (
      <div style={{margin: '10% 10% 10% 10%'}}>
        {this.state.workouts.map(workout => {
          return <WorkoutCard delete={this.deleteWorkout} {...workout} id={workout.id} />
        })}
        
        
      </div>
    )
  }
}



// {this.state.workouts.map(workout => {
//     return <h1>{Workout.name}</h1>
//     {workout.superSets.map(superset => {
//         return <SuperSetCard key={superset._id} superset={superset} />}}
// })})}