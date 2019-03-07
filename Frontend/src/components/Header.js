import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';

export default class Header extends Component {

  buttonPad = {padding: "2% 2% 2% 2%"}
  logOut = {padding: "0% 2% 2% 0%", textAlign: 'right'}
  paperStyle = {padding: "1% 1% 1% 1%", margin: "1% 0% 0.5% 0%", flexGrow: 1 }

  render() {
    if(!this.props.loggedIn){
      return (
        <div style={this.paperStyle}>
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
    )}
    else{
      return (
        <div style={this.paperStyle}>
          <Typography component='h1' variant="h4">FITHUB</Typography>
        </div>
      )
    }
}}

