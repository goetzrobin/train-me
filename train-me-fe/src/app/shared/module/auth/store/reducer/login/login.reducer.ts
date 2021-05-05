import { AsyncState } from '../../../../../model/state/AsyncState';
import { Action, createReducer, on } from '@ngrx/store';
import * as LoginActions from '../../action/login/login.action';
import { AsyncStateStatus } from 'src/app/shared/model/state/AsyncStateStatus';

export const key = 'login';

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

const loginReducer = createReducer(
    initialState,
    on(LoginActions.login, (state, { email, password }) => ({
        ...state,
        password,
        email,
        status: AsyncStateStatus.LOADING,
    })),
    on(LoginActions.loginSuccess, (state, { token, user }) => ({
        ...state,
        password: null,
        token,
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
);

export function reducer(state: State | undefined, action: Action) {
    return loginReducer(state, action);
}
