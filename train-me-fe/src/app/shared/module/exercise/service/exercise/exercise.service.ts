import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exercise } from '../../model/Exercise';
import { ExercisePatchDTO } from '../../model/ExercisePatchDTO';
import { ExercisePostDTO } from '../../model/ExercisePostDTO';

@Injectable({
    providedIn: 'root',
})
export class ExerciseService {
    private baseUrl = `${environment.backendUrl}/exercises`;
    constructor(private http: HttpClient) {}

    public fetchAllExercisesForUserWithEmail(email: string): Observable<any> {
        return this.http.get<Exercise[]>(`${this.baseUrl}/all/${email}`);
    }

    public fetchExerciseById(id: number): Observable<Exercise> {
        return this.http.get<Exercise>(`${this.baseUrl}/${id}`);
    }

    public createExercise(exercise: ExercisePostDTO): Observable<Exercise> {
        return this.http.post<Exercise>(`${this.baseUrl}`, exercise);
    }

    public updateExercise(exercise: ExercisePatchDTO): Observable<Exercise> {
        return this.http.patch<Exercise>(`${this.baseUrl}`, exercise);
    }
}
