import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';

export default class SearchForm extends Component {
  render() {
    return (
      <>
        {/* <Typography style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Workout Library</Typography> */}
        <Typography style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <p>Search</p><input type='text' onChange={this.props.setFilter}/>
        </Typography>
      </>
    )
  }
}
