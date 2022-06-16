import React, { useEffect, useState } from 'react';
import './index.css'

import { TodoActionType, TodoItemType } from '../../../types'

const TodoFooter = (props: {todos: TodoItemType[], action: any}) => {
  const { todos, action } = props;

  return (
    <div className='todo_footer'>
      <div className='footer_count'>
        <span>{todos.length}</span> items left
      </div>
      <div className='footer_action'>
        <button onClick={() => action('TOGGLE_ALL')}>All</button>
        <button onClick={() => action('FILTER_ACTIVE')}>Active</button>
        <button onClick={() => action('FILTER_COMPLETED')}>Completed</button> 
      </div>
      <div className='footer_clear'>
        <button onClick={() => action('CLEAR_COMPLETED')}>Clear completed</button>
      </div>
    </div>
  )
}

export default TodoFooter;