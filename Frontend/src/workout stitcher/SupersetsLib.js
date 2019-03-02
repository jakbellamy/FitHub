import React, { Component } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import {ApplyDrag} from './ApplyDrag'

export default class SupersetsLib extends Component {
  render() {
    return (
      <div className='superset-library'> 
        <Container onDrop={e => 
          this.props.setSupersets(ApplyDrag(this.props.supersets, e))}>
          {this.props.supersets.map(superset => {
            return (
              <Draggable key={superset.id}>
                <div className="draggabl-item">{superset.name}</div>
              </Draggable>
            );
          })}
        </Container>
      </div>
    )
  }
}