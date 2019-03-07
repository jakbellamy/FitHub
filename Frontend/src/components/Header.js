import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';

export default class Header extends Component {

  padded = {padding: "0% 1% 0% 1%", color: 'white', margin: "0% 1% 0% 1%"}
  logOut = {padding: "0% 2% 2% 0%", textAlign: 'right'}
  paperStyle = {padding: "1% 1% 1% 1%", margin: "1% 0% 0.5% 0%", flexGrow: 1 }

  render() {
    if(!this.props.loggedIn){
      return (
        <AppBar >
          <Toolbar>
          <h1 style={this.padded}>FITHUB</h1>
            
                <Link style={{marginLeft: '1%'}} to="/login" >
                  <Typography variant="h6"  style={this.padded}>Login</Typography>
                </Link>     
                <Link style={{marginLeft: '1%'}} to="/signup" >
                  <Typography variant="h6"  style={this.padded}>Signup</Typography>
                </Link>        
            </Toolbar>
      </AppBar>
    )}
    else{
      return (
        <AppBar>
          <Toolbar>
          <h1 style={{color: 'white'}}>FITHUB</h1>    
            <Typography variant="h6"  style={this.padded} onClick={() => this.props.logout()}>Logout</Typography>
            
            <Link style={{marginLeft: '1%'}} to="/workouts" >
                  <Typography variant="h6"  style={this.padded}>Workouts</Typography>
            </Link>   
            <Link style={{marginLeft: '1%'}} to="/stitchlab" >
                  <Typography variant="h6"  style={this.padded}>Stitcher</Typography>
            </Link>   
            <Link style={{marginLeft: '1%'}} to="/newexercise" >
                  <Typography variant="h6"  style={this.padded}>Scratch</Typography>
            </Link>   

          </Toolbar>
        </AppBar>
      )
    }
}}

