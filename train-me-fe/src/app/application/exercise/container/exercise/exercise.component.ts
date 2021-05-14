import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
    selectCurrentRoute,
    selectQueryParams,
} from 'src/app/app/store/router';

@Component({
    selector: 'app-exercise',
    templateUrl: './exercise.component.html',
    styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
    public route$: Observable<any>;
    constructor(private store: Store) {
        this.route$ = this.store.select(selectCurrentRoute);
    }

    ngOnInit(): void {}
}
