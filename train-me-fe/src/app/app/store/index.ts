import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import * as fromRouter from './router';

export interface State {
    router: RouterReducerState<fromRouter.RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
    router: routerReducer,
};
