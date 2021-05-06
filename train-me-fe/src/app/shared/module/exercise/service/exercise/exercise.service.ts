import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ExerciseService {
    private baseUrl = `${environment.backendUrl}/exercises`;
    constructor(private http: HttpClient) {}

    public fetchAllExercisesForUserWithEmail(email: string): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/${email}`);
    }
}
