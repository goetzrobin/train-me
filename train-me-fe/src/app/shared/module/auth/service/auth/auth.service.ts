import { LOCAL_STORAGE_TOKEN } from './../../model/AuthConstants';
import { AuthResponse } from './../../model/AuthResponse';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private baseUrl = `${environment.backendUrl}/auth`;
    constructor(private http: HttpClient) {}

    public login(
        email: string,
        password: string,
    ): Observable<AuthResponse<any>> {
        return this.http
            .post<AuthResponse<any>>(`${this.baseUrl}/login`, {
                email,
                password,
            })
            .pipe(
                tap(({ token }) => {
                    localStorage.setItem(LOCAL_STORAGE_TOKEN, token);
                }),
            );
    }

    public isLoggedIn(): boolean {
        return !!localStorage.getItem(LOCAL_STORAGE_TOKEN);
    }

    public logOut(): void {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN);
    }
}
