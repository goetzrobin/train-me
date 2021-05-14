import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AsyncStateStatus } from 'src/app/shared/model/state/AsyncStateStatus';
import { Exercise } from 'src/app/shared/module/exercise/model/Exercise';
import { ExercisePostDTO } from 'src/app/shared/module/exercise/model/ExercisePostDTO';
import {
    createExercise,
    resetExerciseCreateState,
} from 'src/app/shared/module/exercise/store/action/exercise/exercise.action';
import { selectExerciseCreateAsyncState } from 'src/app/shared/module/exercise/store/selector/exercise/exercise.selector';

@Component({
    selector: 'app-exercise-add',
    templateUrl: './exercise-add.component.html',
    styleUrls: ['./exercise-add.component.scss'],
})
export class ExerciseAddComponent implements OnInit, OnDestroy {
    public exercise$: Observable<Exercise | undefined> | undefined;
    public destroyed$ = new Subject<void>();

    constructor(private store: Store, private router: Router) {}

    public ngOnInit(): void {
        this.store
            .select(selectExerciseCreateAsyncState)
            .pipe(takeUntil(this.destroyed$))
            .subscribe((status) => {
                if (status === AsyncStateStatus.SUCCESS) {
                    this.router.navigate(['/app']);
                    this.store.dispatch(resetExerciseCreateState());
                }
            });
    }

    public ngOnDestroy(): void {
        this.destroyed$.next();
        this.destroyed$.complete();
    }

    public createExercise(exercise: ExercisePostDTO): void {
        this.store.dispatch(createExercise({ exercise }));
    }
}
