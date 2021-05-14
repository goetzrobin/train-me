import { environment } from '../../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HomeService {
    private baseUrl = `${environment.backendUrl}/exercises`;

    constructor(private httpClient: HttpClient) {}

    public getHelloWorld(email: string): Observable<string> {
        return this.httpClient.get<string>(`${this.baseUrl}/${email}`);
    }
}
