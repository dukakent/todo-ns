import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'td-todo-input',
  moduleId: module.id,
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent {
  typedText = '';
  invalid: boolean;

  @Output() create = new EventEmitter<string>();

  onInputFocus(): void {
    this.invalid = false;
  }

  onNewTodo(): void {
    this.typedText = this.typedText.trim();

    if (!this.typedText) {
      this.invalid = true;
      return;
    }

    this.create.emit(this.typedText);
    this.typedText = '';
    this.invalid = false;
  }
}
