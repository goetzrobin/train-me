import { LoginComponent } from './container/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { AuthSharedModule } from '../shared/module/auth/auth-shared.module';

import { containers } from './container';
import { components } from './component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
];

@NgModule({
    declarations: [...components, ...containers],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        AuthSharedModule,
        RouterModule.forChild(routes),
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
    ],
})
export class AuthModule {}
