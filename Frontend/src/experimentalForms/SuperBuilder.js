import React, { Component, Form } from 'react'
import {updateElementInArray} from '../UEA'
import TextField from '@material-ui/core/TextField'

export default class SuperBuilder extends Component {

  state = {
    supersets: []
  }

  handleChange = (id, passedValue) =>{
      this.setState({
          supersets: updateElementInArray(this.state.supersets, id, passedValue)
      })
  }

  render() {
    return (
        <div style={{overflow:'auto'}}>
        <div style={{ display: 'flex', justifyContent: 'stretch', marginTop: '50px', marginRight: '50px', height: '1000px', width: '1000px', overflow: 'auto' }}>
            <TextField 
                id="standard-full-width"
                label="Filter Supersets"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                //helperText="probs gonna stick validation flash here"
                margin="normal"
                InputLabelProps={{
                shrink: true,
                }}
                onChange={(e) => this.props.onSearch(e)}></TextField>
        </div>
    </div>
    )
  }
}
