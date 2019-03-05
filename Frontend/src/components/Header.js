import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class Header extends Component {

  buttonPad = {padding: "0px 10px 10px 0px"}
  render() {
    return (
        <div style={{flexGrow: 1}}>
          {/* <AppBar postion="static" color="default"> */}
          <Typography component='h1' variant="h4">FITHUB</Typography>
            <Toolbar>
              <Typography variant="h6" color="inherit" onClick={this.props.login} style={this.buttonPad}>
                Login
              </Typography>
              <Typography variant="h6" color="inherit" onClick={this.props.signup} style={this.buttonPad}>
                Signup
              </Typography>
            </Toolbar>
          {/* </AppBar> */}


          {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <button onClick={this.props.stitchContainter}>Excercise Stitcher</button>

          <div style={{flexBasis: '70%'}}>
            <button style={{float:'right'}} onClick={this.props.login}>Login</button>
            <button style={{float:'right'}} onClick={this.props.signup}>Signup</button>
          </div>
          </div> */}
      </div>
    )
  }
}
