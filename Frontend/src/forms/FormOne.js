import React, { Component } from 'react'

export default class FormOne extends Component {

  state = {
    superSet: {}
  }

  render() {
    return (
      <div>
        <form>
         <p style={{textAlign: 'left'}}>SuperSetTitle<input type='text' /></p>
         <p>Trainer: <select style={{textAlign: 'right'}}>
            {this.props.trainers.map(trainer => {
              return <option value={trainer}>{trainer.name}</option>
            })}
        </select></p>
        </form>
      </div>
    )
  }
}
