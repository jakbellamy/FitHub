import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles'
import {Link} from 'react-router-dom'
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
        // .then(res => {
        //   localStorage.token = res.token
        //   localStorage.trainer = res.trainer})
        .then(res => this.props.setTrainer(res.token, res.trainer))
        .then( this.props.trainer ? history.push('/stitchlab') : this.flash = "you're doin somethin wrong buddy")
  }

  // signRequest = (e) => {
  //   e.preventDefault()
  //   this.setState({
  //       username: e.target.username.value,
  //       password: e.target.password.value
  //   }, 
  //     () => {
  //       this.postRequest(e)
  //     }
  //   )
  // }

//   logIn = (e) => {
//     e.preventDefault()
//     fetch(`http://localhost:5000/auth/login`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body:JSON.stringify({
//             username: this.state.username,
//             password: this.state.password
//         })
//     })
//      .then(res => res.json())
//      .then(console.log)
//      .then( res => {
//          this.props.onLogin(res.token, res.trainer)
//         //  this.props.history.push(`/stitchlab`)
//      } )
//  }

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

      <Typography component="h1" variant="h5">Login</Typography>
      <Typography component="subheading" color="secondary">
        {this.flash}
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
