import React, { Component } from 'react'
import StitchPage from './StitchPage';
import SupersetsLib from './SupersetsLib';
import SearchField from './SearchField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {history} from '../history'
import { TextField, ButtonBase } from '@material-ui/core';

export default class StitchContainer extends Component {

  state = {
    filter: '',
    supersets: [],
    newWorkoutSets: [],
    newWorkout: {},
    wantSearch: false,
    workoutReady: false
  }

  fetchSupersets = () => {
    fetch('http://localhost:5000/supersets')
    .then(res => res.json())
    .then(supersets => this.setState({ supersets }))
    .catch(error => {
      console.log('superets didnt fetch :(',error)
    })
  }

  componentDidMount(){
    this.fetchSupersets()
  }

  setNewWorkoutSets = (newWorkoutSets) => {this.setState({newWorkoutSets})}
  setSupersets = (supersets) => {this.setState({supersets})}
  onSearch = (e) => {this.setState({filter: e.target.value})}

  wantSearch = () => {this.setState({wantSearch: !this.state.wantSearch, filter: ''})}
  workoutReady = () => {this.setState({workoutReady: !this.state.workoutReady})}

  handleChange = (e) => {
    this.setState({
      newWorkout: {
        [e.target.name]:e.target.value}
    })
  }

  render() {
    const search = <TextField id="outlined-full-width" label="Filter Superset Library" style={{ margin: 5 }} placeholder="ex. Ab Engagers" onChange={this.onSearch} InputLabelProps={{shrink: true,}}/>

    const workoutReady = 
    <>
    <Paper style={{margin: '1% 1% 0% 1%'}}>
      <TextField name="name" label="Name of Workout" fullWidth onChange={(e) => {this.handleChange(e)}} />
    </Paper>  
    <Paper style={{margin: '0% 1% 0% 1%'}}>
      <TextField name="keywords" fullWidth label="Key Word to Identify Workout" onChange={(e) => {this.handleChange(e)}}/>
    </Paper>
    <Button style={{color: 'Secondary'}}>Done</Button>
    </>
    return (
      <>
        <Paper style={{alignItems: 'left',margin: "7% 0% 0% 0%"}}>
          <Button onClick={this.wantSearch}>Save</Button>
          <Button style={{textAlign: 'right'}} onClick={this.workoutReady}>Save as Workout</Button>
        </Paper>
        {this.state.wantSearch ? search : null}
        {this.state.workoutReady ? workoutReady : null}
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{flexBasis: '80%'}}>
        <SupersetsLib supersets={this.state.supersets.filter(superset => {
            return superset.name.includes(this.state.filter) && superset.keywords.filter( keyword => {
              return keyword.includes(this.state.filter)}
          )})}
          setSupersets={this.setSupersets}
          setNewWorkoutSets={this.setNewWorkoutSets} 
          newWorkoutSets={this.state.newWorkoutSets}/>
      </div>
    </div>
    </>
    )
  }
}
