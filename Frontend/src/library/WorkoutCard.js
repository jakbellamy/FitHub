import React, { Component } from 'react'

export default class WorkoutCard extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.workout.name}</h3>
      </div>
    )
  }
}
