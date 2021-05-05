import { Action, ActionReducerMap } from '@ngrx/store';

export interface ExportStore {
    featureKey: string;
    reducers: ActionReducerMap<any, Action>;
    effects: any[];
}
