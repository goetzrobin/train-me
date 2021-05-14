import {
    AsyncCRUDState,
    intitalAsyncCRUDState,
} from '../../../../../model/state/AsyncState';
import { Action, createReducer, on } from '@ngrx/store';
import { AsyncStateStatus } from 'src/app/shared/model/state/AsyncStateStatus';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Exercise } from '../../../model/Exercise';

import * as ExerciseActions from '../../action/exercise/exercise.action';

export const key = 'collection';

export interface State extends AsyncCRUDState, EntityState<Exercise> {}

export const adapter: EntityAdapter<Exercise> = createEntityAdapter<Exercise>();

export const initialState: State = adapter.getInitialState({
    ...intitalAsyncCRUDState,
});

const exerciseReducer = createReducer(
    initialState,
    on(ExerciseActions.fetchAllForUser, (state) => ({
        ...state,
        readStatus: AsyncStateStatus.LOADING,
    })),
    on(ExerciseActions.fetchAllForUserSuccess, (state, { data }) =>
        adapter.setAll(data, {
            ...state,
            readStatus: AsyncStateStatus.SUCCESS,
        }),
    ),
    on(ExerciseActions.fetchAllForUserFailure, (state) =>
        adapter.removeAll({
            ...state,
            readStatus: AsyncStateStatus.ERROR,
        }),
    ),

    on(ExerciseActions.fetchExerciseById, (state) => ({
        ...state,
        readStatus: AsyncStateStatus.LOADING,
    })),
    on(ExerciseActions.fetchExerciseByIdSuccess, (state, { data }) =>
        adapter.addOne(data, {
            ...state,
            readStatus: AsyncStateStatus.SUCCESS,
        }),
    ),
    on(ExerciseActions.fetchExerciseByIdFailure, (state) =>
        adapter.removeAll({
            ...state,
            readStatus: AsyncStateStatus.ERROR,
        }),
    ),

    on(ExerciseActions.updateExercise, (state) => ({
        ...state,
        updateStatus: AsyncStateStatus.LOADING,
    })),
    on(ExerciseActions.updateExerciseSuccess, (state, { data }) =>
        adapter.setOne(data, {
            ...state,
            updateStatus: AsyncStateStatus.SUCCESS,
        }),
    ),
    on(ExerciseActions.updateExerciseFailure, (state) => ({
        ...state,
        updateStatus: AsyncStateStatus.ERROR,
    })),
    on(ExerciseActions.resetExerciseUpdateState, (state) => ({
        ...state,
        updateStatus: AsyncStateStatus.IDLE,
    })),

    on(ExerciseActions.createExercise, (state) => ({
        ...state,
        createStatus: AsyncStateStatus.LOADING,
    })),
    on(ExerciseActions.createExerciseSuccess, (state, { data }) =>
        adapter.setOne(data, {
            ...state,
            createStatus: AsyncStateStatus.SUCCESS,
        }),
    ),
    on(ExerciseActions.createExerciseFailure, (state) => ({
        ...state,
        createStatus: AsyncStateStatus.ERROR,
    })),
    on(ExerciseActions.resetExerciseCreateState, (state) => ({
        ...state,
        createStatus: AsyncStateStatus.IDLE,
    })),
);

export function reducer(state: State | undefined, action: Action) {
    return exerciseReducer(state, action);
}
