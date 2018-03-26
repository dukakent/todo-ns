import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { TodosPageComponent } from './containers/todos-page/todos-page.component';
import { LoggedUserGuard } from '../auth/guards/logged-user.guard';
import { AuthModule } from '../auth/auth.module';

const routes: Routes = [
  {path: '', component: TodosPageComponent, canActivate: [LoggedUserGuard]}
];

@NgModule({
  imports: [
    AuthModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  exports: [NativeScriptRouterModule]
})
export class TodosRoutingModule { }
