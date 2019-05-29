import React, { Component } from 'react'
import Header from './Header';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import ToDoFilter from './ToDoFilter';
import { getRandomTagline } from '../helpers';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header tagline={getRandomTagline()} />
        <ToDoForm />
        <ToDoFilter />
        <ToDoList />
      </div>
    );
  }
}

export default App;