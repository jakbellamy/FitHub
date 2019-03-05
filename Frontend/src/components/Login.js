import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles'
export default class Login extends Component {

  state = {
    trainer: {}
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
        Login
      </Typography>

      <form onSubmit={this.signupRequest} id='form' style={{width: 'auto'}}>
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
          color="primary"
          onClick={this.props.temporaryButton}>
          Login
          </Button>

      </form>
    </Paper>
    )
  }
}
