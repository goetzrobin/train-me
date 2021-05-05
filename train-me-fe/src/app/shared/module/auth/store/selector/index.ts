import { createFeatureSelector } from '@ngrx/store';
import * as fromReducer from '../reducer';

export const selectAuthState = createFeatureSelector<fromReducer.AuthState>(
    fromReducer.featureKey,
);
