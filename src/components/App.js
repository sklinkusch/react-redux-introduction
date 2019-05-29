import React, { Component } from 'react'
import Header from './Header';
import ToDoList from './ToDoList';
import { getRandomTagline } from '../helpers';
import ToDoForm from './ToDoForm';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItems: {}
    }
  }
  render() {
    return (
      <div className="container">
        <Header tagline={getRandomTagline()} />
        <ToDoForm />
        <ToDoList />
      </div>
    )
  }
}
