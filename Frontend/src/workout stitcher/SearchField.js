import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

export default class SearchField extends Component {
  render() {
    return (
        <TextField
          id="standard-full-width"
          label="Filter Supersets"
          style={{ margin: 8 }}
          placeholder="Placeholder"
        //   helperText="probs gonna stick validation flash here"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => this.props.onSearch(e)}
        />

    )
  }
}
