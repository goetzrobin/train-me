import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/shared/module/auth/store/action/logout/logout.action';

@Component({
    selector: 'app-root',
    templateUrl: './application.component.html',
    styleUrls: ['./application.component.scss'],
})
export class ApplicationComponent {
    constructor(private store: Store) {}

    public logout(): void {
        this.store.dispatch(logout());
    }
}
