import React, { Component } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'

export default class SupersetsLib extends Component {
  render() {
    return (
      <div>
        <Container onDrop={this.props.onDrop}>
          {this.props.supersets.map(superset => {
            return (
              <Draggable key={superset.id}>
                {superset.name}
              </Draggable>
            );
          })}
        </Container>
      </div>
    )
  }
}
