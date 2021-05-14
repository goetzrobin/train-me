import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/module/auth/service/auth/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
    LOCAL_STORAGE_EMAIL,
    LOCAL_STORAGE_TOKEN,
} from 'src/app/shared/module/auth/model/AuthConstants';

import * as fromLoginActions from '../../action/login/login.action';

@Injectable()
export class LoginEffects {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromLoginActions.login),
            exhaustMap(({ email, password }) =>
                this.authService.login(email, password).pipe(
                    switchMap((response) => [
                        fromLoginActions.loginSuccess({ response, email }),
                    ]),
                    catchError(({ error }: any) =>
                        of(fromLoginActions.loginError(null)),
                    ),
                ),
            ),
        ),
    );

    onSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromLoginActions.loginSuccess),
                tap(({ response, email }) => {
                    localStorage.setItem(LOCAL_STORAGE_TOKEN, response.token);
                    localStorage.setItem(LOCAL_STORAGE_EMAIL, email);
                    this.router.navigate(['/app']);
                }),
            ),
        { dispatch: false },
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
    ) {}
}
