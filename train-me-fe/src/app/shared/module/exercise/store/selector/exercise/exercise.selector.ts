import { createSelector } from '@ngrx/store';
import { selectExerciseState } from '..';
import { adapter } from '../../reducer/exercise/exercise.reducer';

export const selectExerciseCollectionState = createSelector(
    selectExerciseState,
    (state) => state.collection,
);

export const selectExerciseAsyncState = createSelector(
    selectExerciseCollectionState,
    ({ status }) => status,
);

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors(selectExerciseCollectionState);

export const selectExerciseIds = selectIds;

export const selectExerciseEntities = selectEntities;
export const selectAllExercises = selectAll;
export const selectExerciseTotal = selectTotal;
