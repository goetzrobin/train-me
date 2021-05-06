import { createAction, props } from '@ngrx/store';

export const fetchAllForUser = createAction(
    '[User Request] Fetch all of their Exercises',
    props<{ email: string }>(),
);

export const fetchAllForUserSuccess = createAction(
    '[Exercise API Response] Fetched all of their Exercises successfully',
    props<{ data: any[] }>(),
);

export const fetchAllForUserFailure = createAction(
    '[Exercise API Response] Failed to fetch all of their Exercises',
    props<any>(),
);
