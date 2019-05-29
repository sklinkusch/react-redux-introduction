import React, { Component } from 'react'

export default class ToDoItem extends Component {
  render() {
    return (
      <div className="todo-item">
        {this.props.data.uuid} | {this.props.data.text}
      </div>
    );
  }
}
