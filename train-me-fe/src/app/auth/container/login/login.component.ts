import { LoginFormData } from './../../model/LoginFormData';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/module/auth/service/auth/auth.service';
import { Store } from '@ngrx/store';

import { login } from '../../../shared/module/auth/store/action/login/login.action';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    constructor(private store: Store) {}

    public login({ email, password }: LoginFormData): void {
        if (email && password) {
            this.store.dispatch(login({ email, password }));
        }
    }
}
