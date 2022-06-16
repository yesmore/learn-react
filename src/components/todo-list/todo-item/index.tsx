import React, { useEffect } from 'react';
import "./index.css";
import { TodoAction, TodoItemType } from '../../../types'

const TodoItem = (props: {todo: TodoItemType, action: any}) => {
  const { todo, action } = props;

  // useEffect(() => {
  //   console.log(todo);
  // }, [todo])

  return (
   <div className='todo_item'>
      <div className='item_check'>
        <input 
          className="toggle"
          type="checkbox" 
          checked={todo.done} 
          onChange={() => action('TOGGLE', todo.id)}
        />
      </div>
      <div className='item_text'>
        <span>{todo.text}</span>
      </div>
      <div className='item_del'>
        <button onClick={() => action('DELETE', todo.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;