import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';

export default class Header extends Component {

  buttonPad = {padding: "0px 10px 10px 0px"}
  render() {
    return (
        <div style={{flexGrow: 1}}>
          <Typography component='h1' variant="h4">FITHUB</Typography>
            <Toolbar>
              <Typography variant="h6" color={grey[900]} onClick={this.props.login} style={this.buttonPad}>
                Login
              </Typography>
              <Typography variant="h6" color={grey[900]} onClick={this.props.signup} style={this.buttonPad}>
                Signup
              </Typography>
            </Toolbar>
      </div>
    )
  }
}
