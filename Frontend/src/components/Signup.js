import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles'

export default class Signup extends Component {
  
  state = {
    newTrainer: {}
  }

  postRequest = (e) => {
    e.preventDefault()
    fetch(`http://localhost:5000/trainers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.newTrainer)
    })
      .then(res => res.json())
  }

  clearForm = () => {
    document.getElementById('form').reset()
  }

  signupRequest = (e) => {
    e.preventDefault()
    this.setState({
      newTrainer: {
        name: e.target.name.value,
        username: e.target.username.value,
        password: e.target.password.value
      }
    }, () => {
      this.postRequest(e)
      this.clearForm()
    }
    )
  }

  render() {
    return (
      <CssBaseline>
        <Paper 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form onSubmit={this.signupRequest} id='form' style={{width: 'auto'}}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" id="password" autoComplete="current-password" />
            </FormControl>



            {/* <p>Name: <input type='text' name='name'></input></p>
            <p>Username: <input type='text' name='username'></input></p>
            <p>Password: <input type='password' name='password'></input></p>
            <input type='submit' value='Create account' /> */}
          </form>
        </Paper>
      </CssBaseline>
    )
  }
}
