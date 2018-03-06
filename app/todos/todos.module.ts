import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosPageComponent } from './containers/todos-page/todos-page.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    TodosRoutingModule
  ],
  declarations: [
    TodosPageComponent,
    TodoInputComponent,
    TodoItemComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class TodosModule {
}
