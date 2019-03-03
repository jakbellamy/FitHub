import React, { Component } from 'react'
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import ExerciseCard from './ExerciseCard';

export default class SuperSetCard extends Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography style={{textAlign: 'center'}} variant="h5" component="h3" color="black" gutterBottom>
            {this.props.name}
          </Typography>

          {this.props.sets.excercises.map(exercise => {
            return <ExerciseCard {...exercise} />
          })}

          {/* <Typography style={{flexBasis: '50%'}} variant="body2" >
            {this.props.sets.excercises.map(exercise => {
              let reps = exercise.reps
              let name = exercise.name
              return reps + 'X ' + name})} x 
          </Typography> */}

        </CardContent>
      </Card>
    )
  }
}
