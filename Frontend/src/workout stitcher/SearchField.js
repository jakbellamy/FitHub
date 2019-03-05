import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl, Typography } from '@material-ui/core';

export default class SearchField extends Component {
  render() {
    return (
      <>
      <Typography variant="h6" style={{margin: '0% 2% 0% 2%'}}> Filter
        <TextField
          style={{margin: '0% 2% 0% 2%'}}
          placeholder="ex. Ab Engagers"
          onChange={(e) => this.props.onSearch(e)}
      />
      </Typography>
      </>
    )
  }
}
