import { AsyncState } from '../../../../../model/state/AsyncState';
import { Action, createReducer, on } from '@ngrx/store';
import { AsyncStateStatus } from 'src/app/shared/model/state/AsyncStateStatus';

import * as LoginActions from '../../action/login/login.action';
import * as LogoutActions from '../../action/logout/logout.action';
import * as ReAuthActions from '../../action/reauth/reauth.action';

export const key = 'auth';

export interface State extends AsyncState {
    email: string | null;
    password: string | null;
    token: string | null;
    authenticated: boolean;
}

export const initialState: State = {
    email: null,
    password: null,
    token: null,
    authenticated: false,
    status: AsyncStateStatus.IDLE,
};

const authReducer = createReducer(
    initialState,
    on(LoginActions.login, (state, { email, password }) => ({
        ...state,
        password,
        email,
        status: AsyncStateStatus.LOADING,
    })),
    on(LoginActions.loginSuccess, (state, { response, email }) => ({
        ...state,
        password: null,
        token: response.token,
        authenticated: true,
        status: AsyncStateStatus.SUCCESS,
    })),
    on(LoginActions.loginError, (state, { token, user }) => ({
        ...state,
        email: null,
        password: null,
        token: null,
        authenticated: false,
        status: AsyncStateStatus.ERROR,
    })),

    on(LogoutActions.logout, (state) => ({
        ...state,
        password: null,
        email: null,
        token: null,
        status: AsyncStateStatus.IDLE,
    })),

    on(ReAuthActions.reauthenticateSuccess, (state, { token, email }) => ({
        ...state,
        token,
        email,
        authenticated: true,
        status: AsyncStateStatus.IDLE,
    })),
    on(ReAuthActions.reauthenticateFailure, (state) => ({
        ...state,
        token: null,
        authenticated: false,
        status: AsyncStateStatus.IDLE,
    })),
);

export function reducer(state: State | undefined, action: Action) {
    return authReducer(state, action);
}
