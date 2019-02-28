import React, { Component } from 'react'
import StitchPage from './StitchPage';
import SupersetsLib from './SupersetsLib';

export default class StitchContainer extends Component {

  state = {
    currentUser: null,
    supersets: [],
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

  render() {
    return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{flexBasis: '65%'}}>
        <StitchPage />
      </div>

      <div style={{flexBasis: '35%'}}>
        <SupersetsLib supersets={this.state.supersets}/>
      </div>
    </div>
    )
  }
}
