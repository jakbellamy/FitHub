import React, { Component } from 'react'

export default class SuperSetCard extends Component {
  render() {
    return (
      <div className="draggable-item">
        <h4 style={{textAlign: 'center', borderStyle: 'solid'}}>{this.props.name}</h4>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <span>{this.props.sets.excercises.map(exercise => <p key={exercise._id}>{exercise.reps}X {exercise.name}</p> )}</span>
        </div>

      </div>
    )
  }
}
