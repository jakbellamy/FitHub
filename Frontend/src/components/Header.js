import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  buttonPad = {padding: "0px 10px 10px 0px"}
  render() {
    return (
        <div style={{flexGrow: 1}}>
          <Typography component='h1' variant="h4">FITHUB</Typography>
            <Toolbar>
                <Link style={{ textDecoration: 'none' }} to="/login" >
                  <Typography variant="h6" color={grey[900]} style={this.buttonPad}>Login</Typography>
                </Link>     
                <Link style={{ textDecoration: 'none' }} to="/signup" >
                  <Typography variant="h6" color={grey[900]} style={this.buttonPad}>Signup</Typography>
                </Link>     
            </Toolbar>
      </div>
    )
  }
}
