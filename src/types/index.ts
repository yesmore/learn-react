export type todoValueType = string;

export type TodoItemType = {
  id: string;
  text: todoValueType;
  done: boolean;
}

export type TodoActionType = 
  'ADD' | 'TOGGLE' | 'DELETE' | 'FILTER_ACTIVE' | 
  'TOGGLE_ALL' | 'CLEAR_COMPLETED' | 'FILTER_COMPLETED';

export type TodoAction =
  (action_type: TodoActionType, _id?: number | undefined, todo_value?: todoValueType | undefined) => void;

