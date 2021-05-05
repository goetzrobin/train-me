import { createAction, props } from '@ngrx/store';

export const reauthenticate = createAction(
    '[Initial Load] Try To Reauthenticate on reload of SPA',
);

export const reauthenticateSuccess = createAction(
    '[Initial Load] Could Load Token and Authenticate',
    props<{ token: string }>(),
);

export const reauthenticateFailure = createAction(
    '[Initial Load] Failed to load token',
);
