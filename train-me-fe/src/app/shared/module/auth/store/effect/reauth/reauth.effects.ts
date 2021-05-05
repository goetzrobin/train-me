import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { LOCAL_STORAGE_TOKEN } from 'src/app/shared/module/auth/model/AuthConstants';

import * as fromReAuthActions from '../../action/reauth/reauth.action';

@Injectable()
export class ReAuthEffects {
    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromReAuthActions.reauthenticate),
            switchMap(() => {
                const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);
                if (token) {
                    return of(
                        fromReAuthActions.reauthenticateSuccess({ token }),
                    );
                }
                return of(fromReAuthActions.reauthenticateFailure());
            }),
        ),
    );
    constructor(private actions$: Actions) {}
}
