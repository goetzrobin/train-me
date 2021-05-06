import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ExerciseEffects } from './exercise.effects';

describe('ExerciseEffects', () => {
    let actions$: Observable<any>;
    let effects: ExerciseEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ExerciseEffects, provideMockActions(() => actions$)],
        });

        effects = TestBed.inject(ExerciseEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
