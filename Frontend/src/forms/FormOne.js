import React, { Component } from 'react'

export default class FormOne extends Component {
  render() {
    return (
      <div>
        <form>
         <p style={{textAlign: 'left'}}>SuperSetTitle<input type='text' /></p>
          <select>
            {this.props.trainers.map(trainer => {<option>{trainer.name}</option>})}
          </select>
        </form>
      </div>
    )
  }
}
