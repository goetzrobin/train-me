import {
    AUTH_HEADER_PREFIX,
    LOCAL_STORAGE_TOKEN,
    AUTH_HEADER_KEY,
} from './../model/AuthConstants';
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        const idToken = localStorage.getItem(LOCAL_STORAGE_TOKEN);

        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set(
                    AUTH_HEADER_KEY,
                    AUTH_HEADER_PREFIX + idToken,
                ),
            });

            return next.handle(cloned);
        } else {
            return next.handle(req);
        }
    }
}
