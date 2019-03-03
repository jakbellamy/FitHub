import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

export default class NewSuperSet extends Component {
  
  state = {
    superset : {}
  }

  postSuperset = () => {
    fetch(`http://localhost:5000/supersets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.superset)
    })
  }

  setSuper = (e) => (
      e.preventDefault(),
      console.log(e.target.value)
  )

  render() {
    return (
        <div style={{overflow:'auto'}}>
        <div style={{ display: 'flex', justifyContent: 'stretch', marginTop: '50px', marginRight: '50px', height: '1000px', width: '1000px', overflow: 'auto' }}>
            <TextField 
                id="standard-full-width"
                label="Name of Superset"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                //helperText="probs gonna stick validation flash here"
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                onChange={(e) => this.setSuper(e)}>       
            </TextField>
        </div>
    </div>
    )
  }
}
