import React, { Component } from 'react'
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export default class ExerciseCard extends Component {

  render() {
    return (
      <Card>
        <CardContent>
          <Typography variant="body1" color="black" gutterBottom>
            {this.props.reps}X {this.props.name}
          </Typography>
        </CardContent>
      </Card>
    )
  }
}
