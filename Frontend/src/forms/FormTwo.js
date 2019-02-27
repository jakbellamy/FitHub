import React, { Component } from 'react'

export default class FormTwo extends Component {
  state = {
      counter: 1
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
  }
  render() {
    return (
      <div>
        <h1>Make a Super Set Workout Component</h1>
        <form onSubmit={this.handleSubmit}>
           <p>Name of SuperSet: <input name='name' type='text' /></p>
           <p>keywords: <input name='keywords'/></p>
           <h4>Set{this.state.counter}: </h4>
           <div>
            <div class="stack">
              <div class='row'>
                <div class='col'>
                 <p>Excercise:<input name='' type='text'/></p>
                 <p>Reps: <input name='' type='number'/></p>
                 <input type='submit' value='Submit'/>
               </div>  
                <div class='col'>
                 <p>Excercise:<input name='' type='text'/></p>
                 <p>Reps: <input name='' type='number'/></p>
                 <input type='submit' value='Submit'/>
               </div>  
                <div class='col'>
                 <p>Excercise:<input name='' type='text'/></p>
                 <p>Reps: <input name='' type='number'/></p>
                 <input type='submit' value='Submit'/>
               </div>  
          </div>
          </div>
          </div>
          </form>
      </div>
    )
  }
}
