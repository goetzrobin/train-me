import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ReAuthEffects } from './reauth.effects';

describe('ReAuthEffects', () => {
    let actions$: Observable<any>;
    let effects: ReAuthEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ReAuthEffects, provideMockActions(() => actions$)],
        });

        effects = TestBed.inject(ReAuthEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
