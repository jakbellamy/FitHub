import React, { Component } from 'react'

export default class FormTwo extends Component {
  state = {
      counter: 1,
      superSet: {}
  }

  postSuperset = () => {
    fetch(`http://localhost:5000/supersets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.superSet)
    })
  }

  clearForm = () => {
    document.getElementById('form').reset()
  }

  workoutRequest = (e) => {
    this.setState({
      superSet: {
        name: e.target.name.value,
        keywords: [e.target.keywords.value],
        workouts: [this.props.workout_id],
        sets: {
            reps: e.target.setReps.value,
            excercises: [
                {
                    name: e.target.excerciseOne.value,
                    reps: e.target.repsOne.value
                },
                {
                    name: e.target.excerciseTwo.value,
                    reps: e.target.repsTwo.value
                },
                {
                    name: e.target.excerciseThree.value,
                    reps: e.target.repsThree.value
                },
            ]
      }},
      counter: this.state.counter + 1
    }, () => {
      this.postSuperset()
      this.clearForm()
    }
    )
  }

  render() {
    return (
      <div>
        <h3>Superset {this.state.counter}</h3>
        <form id='form' onSubmit={(e) => {
            e.preventDefault()
            this.workoutRequest(e)
        }}>
           <p>Name of SuperSet: <input name='name' type='text' /></p>
           <p>keywords: <input name='keywords' type='text'/></p>
           <p>Set Reps: <input name='setReps' type='number'/></p>
           <div>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{flexBasis: '30%'}}>
                 <p>Excercise:<input name='excerciseOne' type='text'/></p>
                 <p>Reps: <input name='repsOne' type='number'/></p>
               </div>  
                <div style={{flexBasis: '30%'}}>
                 <p>Excercise:<input name='excerciseTwo' type='text'/></p>
                 <p>Reps: <input name='repsTwo' type='number'/></p>
               </div>  
                <div style={{flexBasis: '30%'}}>
                 <p>Excercise:<input name='excerciseThree' type='text'/></p>
                 <p>Reps: <input name='repsThree' type='number'/></p>
            </div>  
            
          </div>
          </div>
          <input type='submit' value='Save' />
          </form>
      </div>
    )
  }
}
