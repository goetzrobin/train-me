import { Params, RouterStateSnapshot } from '@angular/router';
import { createFeatureSelector } from '@ngrx/store';
import {
    RouterStateSerializer,
    RouterReducerState,
    getSelectors,
} from '@ngrx/router-store';

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}

export const selectRouterState = createFeatureSelector<
    RouterReducerState<RouterStateUrl>
>('router');

export const {
    selectCurrentRoute, // select the current route
    selectFragment, // select the current route fragment
    selectQueryParams, // select the current route query params
    selectRouteParams, // select the current route params
    selectRouteData, // select the current route data
    selectUrl, // select the current url
} = getSelectors(selectRouterState);
