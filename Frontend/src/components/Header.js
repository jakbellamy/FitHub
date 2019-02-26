import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <div className="ui inverted segment">
        <h1>FITHUB</h1>
        <button style={{float:'right'}} onClick={this.props.login}>Login</button>
        <button style={{float:'right'}} onClick={this.props.signup}>Signup</button>
        
      </div>
    )
  }
}
