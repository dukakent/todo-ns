import { Component } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { TodosState } from '../../state/reducers';
import { CreateTodoAction, RemoveTodoAction } from '../../state/actions';
import { selectTodos } from '../../state/selectors';

@Component({
  selector: 'td-home',
  moduleId: module.id,
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<TodosState>) {
    this.todos$ = this.store.select(selectTodos);
  }

  newTodo(descr: string): void {
    const newTodo = new Todo(descr, false);

    this.store.dispatch(new CreateTodoAction(newTodo));
  }

  removeTodo(todoToRemove: Todo): void {
    this.store.dispatch(new RemoveTodoAction(todoToRemove));
  }
}
