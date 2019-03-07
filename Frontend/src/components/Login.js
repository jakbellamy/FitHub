import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {history} from '../history'
export default class Login extends Component {

  state = {
    username: '',
    password: '',
    flash: null
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]:e.target.value
    })
  }

  setLocalStorage = (res) => {
    localStorage.setItem('token', res.token)
    localStorage.setItem('trainer', JSON.stringify(res.trainer))
    localStorage.setItem('loggedIn', true)
    this.props.loggedIn()
  }

  postRequest = (e) => {
    // console.log(this.props.trainer)
    e.preventDefault()
      fetch(`http://localhost:5000/auth/login`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
          })
      })
        .then(res => res.json())
        .then(res => {res.success ? this.setLocalStorage(res) : this.setState({flash: "you're doin somthin wrong"})})
        // .then(res => {localStorage.setItem('token', res.token)})
        .then(() => {localStorage.length > 0 ? history.push('/workouts') : this.setState({flash: "you're doin somthin wrong"})})
  }

  render() {
    return (
      <Paper 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: "2.5% 10% 5% 10%",
        margin: "8% 25% 0% 25%"
      }}>

      <Typography component="h1" variant="h5">Login</Typography>
      <Typography component="subheading" color="secondary">
        {this.state.flash}
      </Typography>
      <form onSubmit={(e) => {this.postRequest(e)}} id='form' style={{width: 'auto'}}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="username">username</InputLabel>
            <Input onChange={this.handleChange} id="username" type="text" name="username" autoComplete="username" autoFocus />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
            <Input onChange={this.handleChange} name="password" type="password" id="password" autoComplete="current-password" />
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary">
          Login
        </Button>
      </form>

    </Paper>
    )
  }
}
