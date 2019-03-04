import React, { Component } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import {ApplyDrag} from './ApplyDrag'
import SuperSetCard from './SuperSetCard';

export default class SupersetsLib extends Component {

  
  groupStyle = {
    marginLeft: '50px',
    flex: 1,
    justifyContent: 'stretch',
  }

 

  render() {
    let x = 0
    return (
      <div style={{overflow:'auto'}}>
        <div style={{ display: 'flex', marginTop: '50px', marginRight: '50px', height: '1000px', width: 'auto', overflow: 'auto' }}>

          <Container 
            style={this.groupStyle}
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
            style={this.groupStyle}
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
