import { LoginFormData } from './../../model/LoginFormData';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/module/auth/service/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    constructor(private authService: AuthService, private router: Router) {}

    login(val: LoginFormData) {
        if (val.email && val.password) {
            this.authService.login(val.email, val.password).subscribe(() => {
                this.router.navigateByUrl('/home');
            });
        }
    }
}
