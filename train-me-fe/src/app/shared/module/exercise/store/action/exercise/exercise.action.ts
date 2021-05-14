import { createAction, props } from '@ngrx/store';
import { Exercise } from '../../../model/Exercise';
import { ExercisePatchDTO } from '../../../model/ExercisePatchDTO';
import { ExercisePostDTO } from '../../../model/ExercisePostDTO';

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

export const fetchExerciseById = createAction(
    '[User Request] Fetch Single Exercise by Id',
    props<{ id: number }>(),
);

export const fetchExerciseByIdSuccess = createAction(
    '[Exercise API Response] Fetched Exercise by Id',
    props<{ data: Exercise }>(),
);

export const fetchExerciseByIdFailure = createAction(
    '[Exercise API Response] Failed to fetch Exercise by Id',
    props<any>(),
);

export const updateExercise = createAction(
    '[User Request] Update Exercise',
    props<{ exercise: ExercisePatchDTO }>(),
);

export const updateExerciseSuccess = createAction(
    '[Exercise API Response] Updated Exercise Successfully',
    props<{ data: Exercise }>(),
);

export const updateExerciseFailure = createAction(
    '[Exercise API Response] Failed to update Exercise',
    props<any>(),
);

export const resetExerciseUpdateState = createAction(
    '[Internal Request] Reset Exercise Update Async State',
);

export const createExercise = createAction(
    '[User Request] Create Exercise',
    props<{ exercise: ExercisePostDTO }>(),
);

export const createExerciseSuccess = createAction(
    '[Exercise API Response] Exercise created Successfully',
    props<{ data: Exercise }>(),
);

export const createExerciseFailure = createAction(
    '[Exercise API Response] Failed to create Exercise',
    props<any>(),
);

export const resetExerciseCreateState = createAction(
    '[Internal Request] Reset Exercise Create Async State',
);
