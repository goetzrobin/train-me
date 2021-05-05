import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from './auth/auth.reducer';

export const featureKey = 'auth';

export interface AuthState {
    [fromAuth.key]: fromAuth.State;
}

export const reducers: ActionReducerMap<AuthState> = {
    [fromAuth.key]: fromAuth.reducer,
};
