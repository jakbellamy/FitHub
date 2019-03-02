import React, { Component } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import {ApplyDrag} from './ApplyDrag'
import SuperSetCard from './SuperSetCard';

export default class SupersetsLib extends Component {
  state = {
    dropped: []
  }

  drop = (dropped) => {this.setState({dropped})}

  render() {
    console.log(this.props)
    return (
      <div className='superset-library'> 

        <Container groupName='things' onDrop={e => 
          this.props.setSupersets(ApplyDrag(this.props.supersets, e))}>

          
          {this.props.supersets.map(superset => {
            return (

              <Draggable key={superset._id}>
              
                <SuperSetCard key={superset._id} {...superset} />
              </Draggable>
             
            );
          })}
         
        </Container>
        <h1>testinginsdf</h1>
        <Container groupName='things' onDrop={e => 
          this.drop(ApplyDrag(this.dropped, e))}>
            <Draggable>text</Draggable>
        </Container>
      </div>
    )
  }
}
