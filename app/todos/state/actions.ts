import { Action } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export enum TodosActionTypes {
  CREATE = '[Todos] Create Todo',
  REMOVE = '[Todos] Remove Todo'
}

export class CreateTodoAction implements Action {
  readonly type = TodosActionTypes.CREATE;

  constructor(public payload: Todo) {}
}

export class RemoveTodoAction implements Action {
  readonly type = TodosActionTypes.REMOVE;

  constructor(public payload: Todo) {}
}

export type TodosActions = CreateTodoAction | RemoveTodoAction;
