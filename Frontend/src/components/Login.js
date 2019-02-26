import React, { Component } from 'react'

export default class Login extends Component {

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form>
          <p>Username: <input type='text' name='username'></input></p>
          <p>Password: <input type='password' name='password'></input></p>
          {/* <input type='submit' value='Login' /> */}
        </form>
        <button onClick={this.props.temporaryButton}> Login</button>
      </div>
    )
  }
}
