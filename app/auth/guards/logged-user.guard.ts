import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AuthState } from '../state/reducers';
import { Observable } from 'rxjs/Observable';
import { selectuserInfo } from '../state/selectors';
import { map, take, tap } from 'rxjs/operators';
import { GoToAuthAction } from '../../state/navigation/actions';

@Injectable()
export class LoggedUserGuard implements CanActivate {
  constructor(private store: Store<AuthState>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      take(1),
      select(selectuserInfo),
      map(info => !!info),
      tap(isAutharized => !isAutharized && this.store.dispatch(new GoToAuthAction()))
    );
  }
}
