import React, { Component } from 'react'

export default class ToDoItem extends Component {
  handleInputKeyUp(e) {
    if (e.keyCode === 13) {
      e.target.blur();
    }
  }
  render() {
    return (
      <div className="todo-item">
        {this.props.data.uuid} | {this.props.data.text}
      </div>
    );
  }
}
