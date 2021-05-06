import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ExerciseService } from '../../../service/exercise/exercise.service';

import * as fromExerciseActions from '../../action/exercise/exercise.action';

@Injectable()
export class ExerciseEffects {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromExerciseActions.fetchAllForUser),
            exhaustMap(({ email }) =>
                this.exerciseService
                    .fetchAllExercisesForUserWithEmail(email)
                    .pipe(
                        switchMap((response) => [
                            fromExerciseActions.fetchAllForUserSuccess({
                                data: response,
                            }),
                        ]),
                        catchError(({ error }: any) =>
                            of(
                                fromExerciseActions.fetchAllForUserFailure(
                                    null,
                                ),
                            ),
                        ),
                    ),
            ),
        ),
    );

    constructor(
        private actions$: Actions,
        private exerciseService: ExerciseService,
    ) {}
}
