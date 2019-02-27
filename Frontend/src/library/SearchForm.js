import React, { Component } from 'react'

export default class SearchForm extends Component {
  render() {
    return (
      <div >
        <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Workout Library</h1>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p>Search</p><input type='text' onChange={this.props.setFilter}/>
        </div>
      </div>
    )
  }
}
