import React, { Component } from 'react'
import Header from './Header';
import ToDoList from './ToDoList';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <ToDoList />
      </div>
    )
  }
}
