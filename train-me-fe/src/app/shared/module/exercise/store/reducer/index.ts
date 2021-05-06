import { ActionReducerMap } from '@ngrx/store';

import * as fromExercise from './exercise/exercise.reducer';

export const featureKey = 'exercise';

export interface ExerciseState {
    [fromExercise.key]: fromExercise.State;
}

export const reducers: ActionReducerMap<ExerciseState> = {
    [fromExercise.key]: fromExercise.reducer,
};
