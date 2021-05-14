import { createSelector } from '@ngrx/store';
import { selectExerciseState } from '..';
import { adapter, State } from '../../reducer/exercise/exercise.reducer';

export const selectExerciseCollectionState = createSelector(
    selectExerciseState,
    (state) => state.collection,
);

export const selectExerciseAsyncState = createSelector(
    selectExerciseCollectionState,
    ({ readStatus }) => readStatus,
);

export const selectExerciseUpdateAsyncState = createSelector(
    selectExerciseCollectionState,
    ({ updateStatus }) => updateStatus,
);

export const selectExerciseCreateAsyncState = createSelector(
    selectExerciseCollectionState,
    ({ createStatus }) => createStatus,
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

export const selectExerciseById = createSelector(
    selectExerciseCollectionState,
    (state: State, { id }: { id: number }) => state.entities[`${id}`],
);
