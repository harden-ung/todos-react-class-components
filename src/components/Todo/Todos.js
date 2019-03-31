import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => {
      return (
        <TodoItem
          markComplete={this.props.markComplete}
          delTodo={this.props.delTodo}
          key={todo.id}
          todo={todo}
        />
      );
    });
  }
}
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;
