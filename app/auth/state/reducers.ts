import { UserInfo } from '../models/user-info.model';
import { ActionReducer, Action } from '@ngrx/store';

export class AuthState {
  constructor(public userInfo: UserInfo | null = null) {}
}

export const authReducer: ActionReducer<AuthState> = (state = new AuthState(), action: Action): AuthState => {
  switch (action.type) {
    default:
      return state;
  }
};
