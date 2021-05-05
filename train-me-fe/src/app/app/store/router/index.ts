import { Params, RouterStateSnapshot } from '@angular/router';
import { createFeatureSelector } from '@ngrx/store';
import { RouterStateSerializer, RouterReducerState } from '@ngrx/router-store';

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}

export const selectRouterState = createFeatureSelector<
    RouterReducerState<RouterStateUrl>
>('router');

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        let route = routerState.root;

        while (route.firstChild) {
            route = route.firstChild;
        }

        const {
            url,
            root: { queryParams },
        } = routerState;
        const { params } = route;

        return { url, params, queryParams };
    }
}
