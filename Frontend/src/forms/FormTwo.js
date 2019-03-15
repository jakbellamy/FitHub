import React, { Component } from 'react'
import { Card, CardContent, TextField, Button, Paper, Typography } from '@material-ui/core';
import {history} from '../history'

let updateElementInArray = (array, id, values) => {
	return array.map( (element) => {
		if(element.id == id){
			return { ...element, ...values }
		} else {
			return element
		}
	})
}
export default class FormTwo extends Component {
  
  state={
    name: '',
    keys: '',
    sets: [],
    setCount: 0
  }
  
  test = (e) => {this.setState({sets: updateElementInArray(this.state.sets, 0,)})}

  addSet = (obj) => {
    this.setState({
      setCount: ++this.state.setCount,
      sets: [...this.state.sets, obj ]
    })
  }

  exName = (e) => {
    this.setState({sets: updateElementInArray(this.state.sets, this.state.setCount - 1, {name: e.target.value})})
  }
  exReps = (e) => {
    this.setState({sets: updateElementInArray(this.state.sets, this.state.setCount - 1, {reps: e.target.value})})
  }

  pushSet = (set) => {
    this.setState({sets: {...this.state.sets, set}})
  }

  setName = (e) => {this.setState({name: e.target.value})}
  setKeys = (e) => {this.setState({keys: [e.target.value]})}


  postSuperset = () => {
    fetch(`http://localhost:5000/supersets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        keywords: this.state.keys,
        trainer: this.props.trainer._id,
        sets: this.state.sets
      })
    })
    .then(res => res.json)
    .then(res => console.log(res))
    .then(history.push('/stitchlab'))
  }

  render() {
    let supersetField = 
      <>
        <TextField label="Exercise Name" id={`exercise${this.state.setCount}`} fullWidth onChange={(e) => this.exName(e)} />
        <TextField  label="Reps" id={`reps${this.state.setCount}`} fullWidth onChange={(e) => this.exReps(e)} />
        <Button color="primary" onClick={() => this.addSet({id: this.state.setCount})}>Add Set+</Button>
      </>
    let flash = <p color='red'>FitHub Only Supports Eight Sets per Super. Sorry.</p>
    let finish = <Button color="secondary"  onClick={() => this.postSuperset()}>Submit</Button>
    return (
      <Paper style={{marginTop: '8%', alignContent: 'center'}}>
        <Card style={{textAlign: 'center'}}>
        <Typography style={{margin: '2% 1% 1% 1%'}} variant="h4" >New Superset</Typography>
        <CardContent style={{margin: '0% 20% 0% 20%'}}>
          <TextField name="name" label="Name of Superset" fullWidth onChange={(e) => this.setName(e)} />
          {this.state.name.length > 1 ? <TextField name="keys" label="Key Words" fullWidth onChange={(e) => this.setKeys(e)}/> : null} 
          {this.state.keys.length > 0 ? <Button color="primary" onClick={() => this.addSet({id: this.state.setCount})}>Add Set+</Button> : null}
          {this.state.setCount >= 1 ? supersetField : null}
          {this.state.setCount >= 2 ? supersetField : null}
          {this.state.setCount >= 3 ? supersetField : null}
          {this.state.setCount >= 4 ? supersetField : null}
          {this.state.setCount >= 5 ? supersetField : null}
          {this.state.setCount >= 6 ? supersetField : null}
          {this.state.setCount >= 7 ? supersetField : null}
          {this.state.setCount >= 8 ? supersetField : null}
          {this.state.setCount >= 9 ? flash : null}
          {this.state.setCount >= 1 ? finish : null}
        </CardContent>
      </Card>
      
      </Paper>
    )
  }
}
