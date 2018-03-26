import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RouterNavigationTypes } from './actions';
import { tap } from 'rxjs/operators';
import { RouterExtensions } from 'nativescript-angular';

@Injectable()
export class RouterEffects {
  constructor(private actions$: Actions, private router: RouterExtensions) {}

  @Effect({dispatch: false})
  readonly goToHome$ = this.actions$.pipe(
    ofType(RouterNavigationTypes.HOME),
    tap(() => this.router.navigate(['/']))
  );

  @Effect({dispatch: false})
  readonly goToAuth$ = this.actions$.pipe(
    ofType(RouterNavigationTypes.AUTH),
    tap(() => this.router.navigate(['/auth']))
  );

  @Effect({dispatch: false})
  readonly goToLogin$ = this.actions$.pipe(
    ofType(RouterNavigationTypes.LOGIN),
    tap(() => this.router.navigate(['/auth/login']))
  );

  @Effect({dispatch: false})
  readonly goToRegister$ = this.actions$.pipe(
    ofType(RouterNavigationTypes.REGISTER),
    tap(() => this.router.navigate(['/auth/register']))
  );
}
