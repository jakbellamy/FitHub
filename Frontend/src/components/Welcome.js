import React, { Component } from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {history} from '../history'


export default class Welcome extends Component {

  state = {
      anchorEl: null
  }

  handleMenu = event => {this.setState({ anchorEl: event.currentTarget });};
  handleClose = () => {this.setState({ anchorEl: null });};

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit"aria-label="Menu">
            <MenuIcon />
                  </IconButton>
                  <Typography variant="title" color="inherit">
                      handleMenu
                  </Typography>
                      <div>
                          <IconButton
                              aria-owns={open ? 'menu-appbar' : null}
                              aria-haspopup="true"
                              onClick={this.handleMenu}
                              color="inherit"
                          >
                              <AccountCircle />
                          </IconButton>
                          <Menu
                              id="menu-appbar"
                              anchorEl={anchorEl}
                              anchorOrigin={{
                                  vertical: 'top',
                                  horizontal: 'right',
                              }}
                              transformOrigin={{
                                  vertical: 'top',
                                  horizontal: 'right',
                              }}
                              open={open}
                              onClose={this.handleClose}
                          >
                              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                              <MenuItem onClick={this.handleClose}>My account</MenuItem>
                          </Menu>
                          </div>
                  </Toolbar>
          </AppBar>
    )
  }
}
