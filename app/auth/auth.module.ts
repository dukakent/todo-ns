import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { LoginFormComponent } from './containers/login-form/login-form.component';
import { RegisterFormComponent } from './containers/register-form/register-form.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './state/reducers';
import { LoggedUserGuard } from './guards/logged-user.guard';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    StoreModule.forFeature('authState', authReducer)
  ],
  providers: [
    LoggedUserGuard
  ],
  declarations: [
    LoginFormComponent,
    RegisterFormComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AuthModule {}
