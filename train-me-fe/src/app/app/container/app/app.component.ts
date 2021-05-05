import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { reauthenticate } from 'src/app/shared/module/auth/store/action/reauth/reauth.action';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor(private store: Store) {}
    public ngOnInit(): void {
        this.store.dispatch(reauthenticate());
    }
}
