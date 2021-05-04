import { LoginComponent } from './container/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { containers } from './container';
import { components } from './component';
import { AuthSharedModule } from '../shared/module/auth/auth-shared.module';

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
    ],
})
export class AuthModule {}
