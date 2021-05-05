import { AuthService } from '../service/auth/auth.service';
import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanLoad,
    Route,
    Router,
    RouterStateSnapshot,
    UrlSegment,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAuthenticated } from '../store/selector/auth/auth.selector';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private store: Store, private router: Router) {}
    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
        return this.store.select(selectAuthenticated).pipe(
            map((isAuthenticated) => {
                if (!isAuthenticated) {
                    if (!route.path || route.path.indexOf('login') == -1) {
                        this.router.navigateByUrl('/login');
                    }
                    return false;
                }
                return true;
            }),
        );
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean> {
        return this.store.select(selectAuthenticated).pipe(
            map((isAuthenticated) => {
                if (!isAuthenticated) {
                    if (
                        !route.url?.every(
                            (route) => route.path.indexOf('login') == -1,
                        )
                    ) {
                        this.router.navigateByUrl('/login');
                    }
                    return false;
                }
                return true;
            }),
        );
    }
}
