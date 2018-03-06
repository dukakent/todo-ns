import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { TodosPageComponent } from './containers/todos-page/todos-page.component';

const routes: Routes = [
  { path: '', component: TodosPageComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class TodosRoutingModule { }
