import { createSelector } from '@ngrx/store';
import { selectAuthState } from '..';

export const selectAuthenticated = createSelector(
    selectAuthState,
    ({ auth }) => auth.authenticated,
);
