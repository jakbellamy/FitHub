import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
        <Paper 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: "2.5% 10% 5% 10%",
            margin: "0% 25% 0% 25%"
          }}>

          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <form onSubmit={this.signupRequest} id='form' style={{width: 'auto'}}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input id="name" type="text" name="name" autoComplete="name" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="username">username</InputLabel>
                <Input id="username" type="text" name="username" autoComplete="username" autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" type="password" id="password" autoComplete="current-password" />
              </FormControl>

              <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary">
              Submit
              </Button>

          </form>
        </Paper>
    )
  }
}
