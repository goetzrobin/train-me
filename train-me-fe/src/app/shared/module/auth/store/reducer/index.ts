import { ActionReducerMap } from '@ngrx/store';

import * as fromLogin from './login/login.reducer';

export const featureKey = 'auth';

export interface AuthState {
    [fromLogin.key]: fromLogin.State;
}

export const reducers: ActionReducerMap<AuthState> = {
    [fromLogin.key]: fromLogin.reducer,
};
