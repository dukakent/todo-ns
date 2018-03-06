import { Component } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'td-home',
  moduleId: module.id,
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent {
  todos: Todo[] = [new Todo('dgsdfg', false)];

  newTodo(descr: string): void {
    this.todos.push(new Todo(descr, false));
  }

  removeTodo(todoToRemove: Todo): void {
    this.todos = this.todos.filter(t => t !== todoToRemove);
  }
}
