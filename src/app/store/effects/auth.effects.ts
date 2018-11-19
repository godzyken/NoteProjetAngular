import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthActionsTypes, LoginAttempted, LoginFailed, LoginSuccessful, LogoutSuccessful} from '../actions/auth.actions';
import {AuthService} from '../../auth/auth.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {

  @Effect()
  loginAttempted$ = this.actions$.pipe(
    ofType(AuthActionsTypes.LoginAttempted),
    switchMap((data: LoginAttempted) => this.authService
      .login(data.payload)
      .pipe(
        map((userTokenObj: any) => new LoginSuccessful(userTokenObj.token)),
        catchError(() => of(new LoginFailed()))
      ))
  );

  @Effect({dispatch: false})
  loginSuccessful$ = this.actions$.pipe(
    ofType(AuthActionsTypes.LoginSuccessful),
    switchMap(() => of(this.router.navigateByUrl('dashboard')))
  );

  @Effect()
  logoutRequested$ = this.actions$.pipe(
    ofType(AuthActionsTypes.LogoutRequested),
    switchMap(() => this.authService.logout().pipe(
      map(() => new LogoutSuccessful())
    ))
  );

  @Effect({dispatch: false})
  logoutSuccessful$ = this.actions$.pipe(
    ofType(AuthActionsTypes.LogoutSuccessful),
    switchMap(() => this.router.navigateByUrl('login'))
  );

  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router) {
  }
}
