import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LogoutEffects } from './logout.effects';

describe('LogoutEffects', () => {
    let actions$: Observable<any>;
    let effects: LogoutEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LogoutEffects, provideMockActions(() => actions$)],
        });

        effects = TestBed.inject(LogoutEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
