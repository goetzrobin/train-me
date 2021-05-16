import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { AsyncStateStatus } from 'src/app/shared/model/state/AsyncStateStatus';
import { ErrorService } from 'src/app/shared/module/error/service/error/error.service';
import { Exercise } from 'src/app/shared/module/exercise/model/Exercise';
import { ExercisePatchDTO } from 'src/app/shared/module/exercise/model/ExercisePatchDTO';
import {
    fetchExerciseById,
    resetExerciseUpdateState,
    updateExercise,
} from 'src/app/shared/module/exercise/store/action/exercise/exercise.action';
import {
    selectExerciseAsyncState,
    selectExerciseById,
    selectExerciseTotal,
    selectExerciseUpdateAsyncState,
} from 'src/app/shared/module/exercise/store/selector/exercise/exercise.selector';

@Component({
    selector: 'app-exercise-edit',
    templateUrl: './exercise-edit.component.html',
    styleUrls: ['./exercise-edit.component.scss'],
})
export class ExerciseEditComponent implements OnInit, OnDestroy {
    public exercise$: Observable<Exercise | undefined> | undefined;
    public destroyed$ = new Subject<void>();

    constructor(
        private route: ActivatedRoute,
        private store: Store,
        private router: Router,
        private errorService: ErrorService,
    ) {}

    public ngOnInit(): void {
        const routeParams = this.route.snapshot.paramMap;
        const exerciseId = Number(routeParams.get('id'));

        this.exercise$ = this.store.select(selectExerciseById, {
            id: exerciseId,
        });

        this.store
            .select(selectExerciseUpdateAsyncState)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((status) => {
                if (status === AsyncStateStatus.SUCCESS) {
                    this.router.navigate(['/app']);
                    this.store.dispatch(resetExerciseUpdateState());
                }
            });

        this.store
            .select(selectExerciseAsyncState)
            .pipe(
                takeUntil(this.destroyed$),
                switchMap((status) => {
                    return status === AsyncStateStatus.ERROR
                        ? this.errorService
                              .displayError('damn I failed to load this')
                              .afterDismissed()
                        : of(null);
                }),
            )
            .subscribe((action) => {
                if (action && action.dismissedByAction) {
                    this.router.navigate(['/app']);
                    this.store.dispatch(resetExerciseUpdateState());
                }
            });

        this.exercise$
            .pipe(takeUntil(this.destroyed$))
            .subscribe((exercise) => {
                if (!exercise) {
                    this.store.dispatch(fetchExerciseById({ id: exerciseId }));
                }
            });
    }

    public ngOnDestroy(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }

    public updateExercise(exercise: ExercisePatchDTO): void {
        this.store.dispatch(updateExercise({ exercise }));
    }
}
