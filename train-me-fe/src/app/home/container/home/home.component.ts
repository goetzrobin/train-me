import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { HomeService } from '../../service/home/home.service';
import { Component, OnInit } from '@angular/core';
import { logout } from 'src/app/shared/module/auth/store/action/logout/logout.action';
import {
    selectAuthenticated,
    selectUserEmail,
} from 'src/app/shared/module/auth/store/selector/auth/auth.selector';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { fetchAllForUser } from 'src/app/shared/module/exercise/store/action/exercise/exercise.action';
import { selectAllExercises } from 'src/app/shared/module/exercise/store/selector/exercise/exercise.selector';
import { State } from 'src/app/shared/module/exercise/store/reducer/exercise/exercise.reducer';
import { Exercise } from 'src/app/shared/module/exercise/model/Exercise';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public exercises$: Observable<Exercise[]> | undefined;
    constructor(private store: Store<State>) {}

    public ngOnInit(): void {
        combineLatest([
            this.store.select(selectUserEmail),
            this.store.select(selectAuthenticated),
        ]).subscribe(([email, authenticated]) => {
            if (email && authenticated) {
                this.store.dispatch(fetchAllForUser({ email }));
            }
        });

        this.exercises$ = this.store.select(selectAllExercises);
    }

    public logout(): void {
        this.store.dispatch(logout());
    }
}
