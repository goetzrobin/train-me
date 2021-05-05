import { AuthResponse } from '../../../model/AuthResponse';
import { createAction, props } from '@ngrx/store';

export const login = createAction(
    '[Login Page] Login',
    props<{ email: string; password: string }>(),
);

export const loginSuccess = createAction(
    '[Login API] Login Success',
    props<AuthResponse<any>>(),
);

export const loginError = createAction('[Login API] Login Error', props<any>());
