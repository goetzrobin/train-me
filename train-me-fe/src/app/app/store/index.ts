import { ActionReducerMap, createSelector } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import * as fromRouter from './router';

export interface State {
    router: RouterReducerState<fromRouter.RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
    router: routerReducer,
};

export const selectQueryParams = createSelector(
    fromRouter.selectRouterState,
    (state: RouterReducerState<fromRouter.RouterStateUrl>) =>
        state.state.queryParams,
);

export const selectUrl = createSelector(
    fromRouter.selectRouterState,
    (state: RouterReducerState<fromRouter.RouterStateUrl>) =>
        state.state.url.split('/'),
);
