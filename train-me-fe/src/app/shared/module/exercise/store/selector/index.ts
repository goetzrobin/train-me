import { createFeatureSelector } from '@ngrx/store';
import * as fromReducer from '../reducer';

export const selectExerciseState = createFeatureSelector<fromReducer.ExerciseState>(
    fromReducer.featureKey,
);
