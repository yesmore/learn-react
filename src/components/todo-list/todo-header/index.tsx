import { Action } from 'history';
import React from 'react';
import useInput from "../../../hooks/useInput";

import { TodoActionType, TodoItemType } from '../../../types'

const TodoHeader = (props: {todos: TodoItemType[], action: any}) => {
  const { todos, action } = props;
  const [newValue, onNewValueChange, setNewValue] = useInput();

  const onAddTodo = () => {
    if(newValue !== '') {
      action('ADD', -1, newValue);
      setNewValue('');
    }
  }

  return (
    <div>
        <h1>Todo List</h1>
        <input
          className="new-todo"
          placeholder="新加代办项"
          value={newValue}
          onChange={onNewValueChange}
        /> 
        <button onClick={onAddTodo}>添加</button>
      </div>
  )
}

export default TodoHeader;