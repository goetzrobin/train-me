import { AuthResponse } from '../../../model/AuthResponse';
import { createAction, props } from '@ngrx/store';

export const login = createAction(
    '[Login Page] Login',
    props<{ email: string; password: string }>(),
);

export const loginSuccess = createAction(
    '[Login API] Login Success',
    props<{ response: AuthResponse<any>; email: string }>(),
);

export const loginError = createAction('[Login API] Login Error', props<any>());
