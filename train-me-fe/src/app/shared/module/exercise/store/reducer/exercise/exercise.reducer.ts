import { AsyncState } from '../../../../../model/state/AsyncState';
import { Action, createReducer, on } from '@ngrx/store';
import { AsyncStateStatus } from 'src/app/shared/model/state/AsyncStateStatus';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Exercise } from '../../../model/Exercise';

import * as ExerciseActions from '../../action/exercise/exercise.action';

export const key = 'collection';

export interface State extends AsyncState, EntityState<Exercise> {}

export const adapter: EntityAdapter<Exercise> = createEntityAdapter<Exercise>();

export const initialState: State = adapter.getInitialState({
    status: AsyncStateStatus.IDLE,
});

const exerciseReducer = createReducer(
    initialState,
    on(ExerciseActions.fetchAllForUser, (state) => ({
        ...state,
        status: AsyncStateStatus.LOADING,
    })),
    on(ExerciseActions.fetchAllForUserSuccess, (state, { data }) =>
        adapter.setAll(data, {
            ...state,
            status: AsyncStateStatus.SUCCESS,
        }),
    ),
    on(ExerciseActions.fetchAllForUserFailure, (state) =>
        adapter.removeAll({
            ...state,
            status: AsyncStateStatus.ERROR,
        }),
    ),
);

export function reducer(state: State | undefined, action: Action) {
    return exerciseReducer(state, action);
}
