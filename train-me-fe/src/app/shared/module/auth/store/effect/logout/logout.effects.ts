import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/module/auth/service/auth/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { LOCAL_STORAGE_TOKEN } from 'src/app/shared/module/auth/model/AuthConstants';

import * as fromLogOutActions from '../../action/logout/logout.action';

@Injectable()
export class LogoutEffects {
    logout$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(fromLogOutActions.logout),
                tap(() => {
                    localStorage.removeItem(LOCAL_STORAGE_TOKEN);
                    this.router.navigate(['/login']);
                }),
            ),
        { dispatch: false },
    );
    constructor(private actions$: Actions, private router: Router) {}
}
