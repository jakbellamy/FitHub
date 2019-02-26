import React, { Component } from 'react'
import FormOne from './FormOne'

export default class NewExcercise extends Component {
  
  state = {
      view: '',
      trainers: []
  }

  fetchTrainers = () => {
    fetch('http://localhost:5000/trainers')
        .then(res => res.json())
        .then(trainers => this.setState({ trainers }))
  }

  render() {
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Excercise Creator</h1>
        {(() => {
        switch(this.state.view) {
          case 'Signup':
            return <FormOne trainers={this.state.trainers}/>
          default:
            return <FormOne trainers={this.state.trainers}/>
        }
      })()}
      </div>
    )
  }
}
