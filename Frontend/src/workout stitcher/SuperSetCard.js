import React, { Component } from 'react'

export default class SuperSetCard extends Component {
  render() {
    return (
      <div>
        <h4 style={{textAlign: 'center', borderStyle: 'solid'}}>{this.props.name}</h4>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <p>{this.props.sets.excercises.map(exercise => <p key={exercise._id}>{exercise.reps}X {exercise.name}</p> )}</p>
        </div>

      </div>
    )
  }
}
