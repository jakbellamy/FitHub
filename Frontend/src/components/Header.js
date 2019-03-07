import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  buttonPad = {padding: "0px 10px 10px 0px"}
  logOut = {padding: "0px 10px 10px 0px", textAlign: 'right'}
  render() {
    if(!this.props.loggedIn){
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
    )}
    else{
      return (
        <div style={{flex: 1, flexDirection: 'row'}}>
          <Typography component='h1' variant="h4">FITHUB</Typography>
            <Toolbar>
             <Typography style={{textAlign: 'right'}} onClick={this.props.logOut} variant="h6" style={this.logOut}>Logout</Typography>
            </Toolbar>
        </div>
      )
    }
}}

