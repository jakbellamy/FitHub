import React, { Component } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import {ApplyDrag} from './ApplyDrag'
import SuperSetCard from './SuperSetCard';

export default class SupersetsLib extends Component {
  state = {
    dropped: []
  }

  drop = (dropped) => {this.setState({dropped})}

  groupStyle = {
    marginLeft: '50px',
    flex: 1,
    borderStyle: 'solid'
  }

  render() {
    console.log(this.props)
    return (
      <div style={{overflow:'auto'}}>
        <div style={{ display: 'flex', justifyContent: 'stretch', marginTop: '50px', marginRight: '50px', height: '1000px', width: '1000px', overflow: 'auto' }}>

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
            getChildPayload={i => this.props.newWorkoutSets[i]} 
            onDrop={e => this.props.setNewWorkoutSets(ApplyDrag(this.props.newWorkoutSets, e))}>
              {
                this.props.newWorkoutSets.map(superset => {
                  return (
                    <Draggable key={superset._id}>
                        <SuperSetCard key={superset._id} {...superset} />
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
