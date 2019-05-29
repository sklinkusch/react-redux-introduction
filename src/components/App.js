import React, { Component } from 'react'
import Header from './Header';
import ToDoList from './ToDoList';
import { getRandomTagline } from '../helpers';
import ToDoForm from './ToDoForm';
import uuid from "uuid/v4";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItems: {}
    }
  }
  addToDo = text => {
    const todo = {
      uuid: uuid(),
      text: text,
      done: false
    };
    this.setState(state => {
      state.toDoItems[todo.uuid] = todo;
      return state;
    });
  };
  updateToDoText = (uuid, text) => {
    this.setState(state => {
      state.toDoItems[uuid].text = text;
      return state;
    });
  };
  render() {
    console.log(this.state.toDoItems);
    return (
      <div className="container">
        <Header tagline={getRandomTagline()} />
        <ToDoForm addToDo={this.addToDo} />
        <ToDoList items={this.state.toDoItems} />
      </div>
    )
  }
}
