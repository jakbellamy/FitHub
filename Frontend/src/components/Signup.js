import React, { Component } from 'react'

export default class Signup extends Component {
  
  state = {
    newTrainer: {}
  }

  postRequest = (e) => {
    e.preventDefault()
    fetch(`http://localhost:5000/trainers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.newTrainer)
    })
      .then(res => res.json())
  }

  clearForm = () => {
    document.getElementById('form').reset()
  }

  signupRequest = (e) => {
    e.preventDefault()
    this.setState({
      newTrainer: {
        name: e.target.name.value,
        username: e.target.username.value,
        password: e.target.password.value
      }
    }, () => {
      this.postRequest(e)
      this.clearForm()
    }
    )
  }

  render() {
    return (
      <div>
        <h2>Signup</h2>
        <form onSubmit={this.signupRequest} id='form'>
          <p>Name: <input type='text' name='name'></input></p>
          <p>Username: <input type='text' name='username'></input></p>
          <p>Password: <input type='password' name='password'></input></p>
          <input type='submit' value='Create account' />
        </form>
      </div>
    )
  }
}
