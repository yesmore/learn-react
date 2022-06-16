import React, { useEffect, useState } from 'react';
import TodoItem from './todo-item';
import TodoFooter from './todo-footer';
import TodoHeader from './todo-header';

import { TodoActionType, TodoAction } from '../../types'
import { guid } from '../../utils'

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: guid(), text: 'Learn React', done: true },
    { id: guid(), text: 'Learn TypeScript', done: false },
    { id: guid(), text: 'Learn Angular', done: false },
  ])

  // actions
  const onAddTodo = (newValue: string) => {
    if(newValue !== '') {
      setTodos([{ id: guid(), text: newValue, done: false }, ...todos]);
    }
  }
  const onDelTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  const onToggleTodo = (id: string) => {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    }))
  }
  const onToggleAll = () => {
    const allDone = todos.every(todo => todo.done);
    console.log(allDone);
    
    setTodos(todos.map(todo => {
      todo.done = !allDone;
      return todo;
    }))
  }
  const onFilterActive = () => {
    setTodos(todos.filter(todo => !todo.done));
  }
  const onFilterCompleted = () => {
    setTodos(todos.filter(todo => todo.done));
  }
  const onClearCompleted = () => {
    setTodos(todos.filter(todo => !todo.done));
  }

  // do
  const onAction = (action: TodoActionType, _id: string, _newValue: string) => {
    switch(action) {
      case 'ADD':
        onAddTodo(_newValue);
        break;
      case 'DELETE':
        onDelTodo(_id);
        break;
      case 'TOGGLE':
        onToggleTodo(_id);
        break;
      case 'TOGGLE_ALL':
        onToggleAll();
        break;
      case 'FILTER_ACTIVE':
        onFilterActive();
        break;
      case 'FILTER_COMPLETED':
        onFilterCompleted();
        break;
      case 'CLEAR_COMPLETED':
        onClearCompleted();
        break;
    }
  }

  return (
    <div className='todo-list'>
      <TodoHeader todos={todos} action={onAction} />
      <div>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} action={onAction} />
        ))}
      </div>
      <TodoFooter todos={todos} action={onAction} />
    </div>
  );
}

export default TodoList;