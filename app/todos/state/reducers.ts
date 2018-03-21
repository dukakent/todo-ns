import { Todo } from '../models/todo.model';
import { ActionReducer } from '@ngrx/store';
import { TodosActions, TodosActionTypes } from './actions';

export class TodosState {
  todos: Todo[] = [];
}

export const todosReducer: ActionReducer<TodosState> = (state = new TodosState(), action: TodosActions): TodosState => {
  switch (action.type) {
    case TodosActionTypes.CREATE:
      const tmp = {
        ...state,
        todos: [...state.todos, action.payload]
      };
      return tmp;
    case TodosActionTypes.REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo !== action.payload)
      };
    default:
      return state;
  }
};
