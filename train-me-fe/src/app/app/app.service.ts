import { environment } from '../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {
    private baseUrl = `${environment.backendUrl}/users`;

    constructor(private httpClient: HttpClient) {}

    public getHelloWorld(): Observable<string> {
        return this.httpClient.get<string>(this.baseUrl);
    }
}
