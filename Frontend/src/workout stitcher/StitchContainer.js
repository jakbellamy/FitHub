import React, { Component } from 'react'
import StitchPage from './StitchPage';
import SupersetsLib from './SupersetsLib';

export default class StitchContainer extends Component {

  state = {
    currentUser: null,
    supersets: [],
    newWorkoutSets: [],
    newWorkout: {}
  }

  fetchSupersets = () => {
    fetch('http://localhost:5000/supersets')
    .then(res => res.json())
    .then(supersets => this.setState({ supersets }))
    .catch(error => {
      console.log('superets didnt fetch :(',error)
    })
  }

  componentDidMount(){
    this.fetchSupersets()
  }

  setNewWorkoutSets = (newWorkoutSets) => {this.setState({newWorkoutSets})}

  setSupersets = (supersets) => {this.setState({supersets})}

  render() {
    return (
    <div style={{display: 'flex', justifyContent: 'center'}}>

      <div style={{flexBasis: '80%'}}>
        <SupersetsLib 
        supersets={this.state.supersets} 
        setSupersets={this.setSupersets}
        setNewWorkoutSets={this.setNewWorkoutSets} 
        newWorkoutSets={this.state.newWorkoutSets}
        />
      </div>
      
      

      
    </div>
    )
  }
}
