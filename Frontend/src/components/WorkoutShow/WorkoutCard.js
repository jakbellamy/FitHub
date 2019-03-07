import React, { Component } from 'react'
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import SuperSetCard from '../../workout stitcher/SuperSetCard';
import Paper from '@material-ui/core/Paper';

export default class WorkoutCard extends Component {
    cardStyle = {
        // display: 'block',
        width: '70vw',
        height: '100vw'
      } 
    
    render() {
        console.log(this.props.superSets)
      return (
        <Paper style={this.cardStyle}>
          <CardContent >
            <Typography onClick={() => this.props.delete(this.props._id)} color="secondary" >Delete</Typography>  
            <Typography style={{textAlign: 'center'}} variant="h5" component="h3" color="black" >
              {this.props.name}
            </Typography>
            {this.props.superSets.map(superset => {
              return <SuperSetCard {...superset} id={superset._id}/>
            })}
          </CardContent>
        </Paper>
      )
    }
}
