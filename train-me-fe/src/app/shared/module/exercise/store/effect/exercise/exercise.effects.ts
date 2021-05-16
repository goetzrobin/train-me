import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ExerciseService } from '../../../service/exercise/exercise.service';

import * as fromExerciseActions from '../../action/exercise/exercise.action';

@Injectable()
export class ExerciseEffects {
    fetchAll$ = createEffect(() =>
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

    fetchById$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromExerciseActions.fetchExerciseById),
            exhaustMap(({ id }) =>
                this.exerciseService.fetchExerciseById(id).pipe(
                    switchMap((response) => [
                        fromExerciseActions.fetchExerciseByIdSuccess({
                            data: response,
                        }),
                    ]),
                    catchError((error: any) => {
                        console.log(error);
                        return of(
                            fromExerciseActions.fetchExerciseByIdFailure(null),
                        );
                    }),
                ),
            ),
        ),
    );

    create$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromExerciseActions.createExercise),
            exhaustMap(({ exercise }) =>
                this.exerciseService.createExercise(exercise).pipe(
                    switchMap((response) => [
                        fromExerciseActions.createExerciseSuccess({
                            data: response,
                        }),
                    ]),
                    catchError(({ error }: any) =>
                        of(fromExerciseActions.createExerciseFailure(null)),
                    ),
                ),
            ),
        ),
    );

    update$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromExerciseActions.updateExercise),
            exhaustMap(({ exercise }) =>
                this.exerciseService.updateExercise(exercise).pipe(
                    switchMap((response) => [
                        fromExerciseActions.updateExerciseSuccess({
                            data: response,
                        }),
                    ]),
                    catchError(({ error }: any) =>
                        of(fromExerciseActions.updateExerciseFailure(null)),
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
