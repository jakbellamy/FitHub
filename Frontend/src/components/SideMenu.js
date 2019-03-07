import React, { Component } from 'react';
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

export default class SideMenu extends Component {
  render() {
    return (
      <div style={{
        backgroundColor: '#bccad6',
        flex: 1,
        justifyContent: 'stretch'
        }}>
        <Divider />
          <List >
            <ListItem key={'trainer'} >
              <ListItemText primary={this.props.trainer.name} />
            </ListItem>
          </List>
        <Divider />
          <List>
              <ListItem onClick={() => history.push('/workouts')} key={'workouts'}>
                <ListItemText primary={'Workouts'} />
              </ListItem>
              <ListItem onClick={() => history.push('/stitchlab')} key={'stitchlab'}>
                <ListItemText primary={'Stitch Lab'} />
              </ListItem>
              <ListItem onClick={() => history.push('/newworkout')} key={'newWorkout'}>
                <ListItemText primary={'New Workout'} />
              </ListItem>
              <ListItem onClick={() => history.push('/newsuperset')} key={'newSuperset'}>
                <ListItemText primary={'New Superset'} />
              </ListItem>
          </List>
            <Divider />
          <List>
            <ListItem onClick={() => history.push('/about')} button key={'about'}>
              <ListItemText primary={'About'} />
            </ListItem>
            <ListItem button onClick={this.props.logOut} key={'logout'}>
              <ListItemText primary={'Logout'} />
            </ListItem>
          </List>

          </div>
        );
      }
    }
    
    // ResponsiveDrawer.propTypes = {
    //   classes: PropTypes.object.isRequired,
    //   // Injected by the documentation to work in an iframe.
    //   // You won't need it on your project.
    //   container: PropTypes.object,
    //   theme: PropTypes.object.isRequired,
    // };