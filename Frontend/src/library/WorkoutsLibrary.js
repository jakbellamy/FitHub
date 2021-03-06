import React, { Component } from 'react'
import SearchForm from './SearchForm';
import WorkoutCard from './WorkoutCard';

export default class WorkoutsLibrary extends Component {
  
  state = {
    workouts: [],
    supersets: [],
    filter: ''
  }

  fetchWorkouts = () => {
    fetch('http://localhost:5000/workouts')
    .then(res => res.json())
    .then(workouts => this.setState({ workouts }))
    .catch(error => {
      console.log('workouts didnt fetch :(', error)
    })
  }



  setFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  componentDidMount(){
    this.fetchWorkouts()
  }
  
  render() {
    return (
      <div>
        <SearchForm setFilter={this.setFilter}/>
        {this.state.workouts.map(workout => {
          return <WorkoutCard workout={workout} id={workout.id}/>
        }
        )}
      </div>
    )
    }
  }

