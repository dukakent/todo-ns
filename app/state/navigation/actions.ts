import { Action } from '@ngrx/store';

export enum RouterNavigationTypes {
  HOME = '[Router] Go to home page',
  AUTH = '[Router] Go to auth page',
  LOGIN = '[Router] Go to login page',
  REGISTER = '[Router] Go to register page',
}

export class GoToHomeAction implements Action {
  readonly type = RouterNavigationTypes.HOME;
}

export class GoToAuthAction implements Action {
  readonly type = RouterNavigationTypes.AUTH;
}

export class GoToLoginAction implements Action {
  readonly type = RouterNavigationTypes.LOGIN;
}

export class GoToRegisterAction implements Action {
  readonly type = RouterNavigationTypes.REGISTER;
}

export type RouterActions = GoToAuthAction | GoToHomeAction | GoToLoginAction | GoToRegisterAction;
