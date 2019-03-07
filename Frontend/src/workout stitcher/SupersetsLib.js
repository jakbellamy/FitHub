import React, { Component } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import {ApplyDrag} from './ApplyDrag'
import SuperSetCard from './SuperSetCard';

export default class SupersetsLib extends Component {

  
  rightStyle = {
    marginLeft: '0%',
    flex: 0.5,
    justifyContent: 'right',
    overflow: 'auto',
    width: 'auto'

  }

  leftStyle = {
    flex: 0.5,
    justfiyContent: 'left',
    overflow: 'auto',
    width: 'auto'
  }

  render() {
    let x = 0
    return (
      <div >
        <div style={{ display: 'flex', marginTop: '50px', height: 'auto', width: 'auto' }}>

          <Container 
            style={this.leftStyle}
            groupName='things' 
            behaviour="copy" 
            getChildPayload={i => this.props.supersets[i]}
            onDrop={e => this.props.setSupersets(ApplyDrag(this.props.supersets, e))}>
              {
                this.props.supersets.map(superset => {
                 return (
                   <Draggable key={superset._id}>
                      <SuperSetCard key={superset._id} {...superset} />
                    </Draggable>  
                 );
                })
              }
          </Container>

        
          <Container 
            style={this.rightStyle}
            groupName='things'
            removeOnDropOut='true'
            getChildPayload={i => this.props.newWorkoutSets[i]} 
            onDrop={e => (this.props.setNewWorkoutSets(ApplyDrag(this.props.newWorkoutSets, e)))}>
              {
                this.props.newWorkoutSets.map(superset => {
                  return (
                    <Draggable key={superset._id + x++}>
                        <SuperSetCard key={superset._id + x++} {...superset} />
                      </Draggable>  
                  );
                  })
                }
            </Container>

        </div>
      </div>
    )
  }
}
