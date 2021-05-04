import { tap } from 'rxjs/operators';
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

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private authService: AuthService, private router: Router) {}
    canLoad(route: Route, segments: UrlSegment[]): boolean {
        if (!this.authService.isLoggedIn()) {
            if (route.path?.indexOf('login')) {
                this.router.navigateByUrl('/login');
            }
            return false;
        }
        return true;
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): boolean {
        if (!this.authService.isLoggedIn()) {
            if (
                !route.url?.every((route) => route.path.indexOf('login') == -1)
            ) {
                this.router.navigateByUrl('/login');
            }
            return false;
        }
        return true;
    }
}
