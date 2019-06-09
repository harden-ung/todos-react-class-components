import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

class Todos extends Component {
  render() {
    const { todos, markComplete, delTodo } = this.props;
    return todos.map(todo => {
      return (
        <TodoItem
          markComplete={markComplete}
          delTodo={delTodo}
          key={todo.id}
          todo={todo}
        />
      );
    });
  }
}
Todos.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default Todos;
