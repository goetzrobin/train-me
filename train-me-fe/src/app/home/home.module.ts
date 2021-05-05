import { LazyInterceptor } from './../shared/config/LazyInterceptor';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './container/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthSharedModule } from '../shared/module/auth/auth-shared.module';
import { AuthGuard } from '../shared/module/auth/guard/auth.guard';

import { containers } from './container';
import { components } from './component';
import { services } from './service';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: HomeComponent,
    },
];

@NgModule({
    declarations: [...containers, ...components],
    imports: [
        HttpClientModule,
        AuthSharedModule,
        CommonModule,
        RouterModule.forChild(routes),
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
    ],
    providers: [...services, LazyInterceptor],
})
export class HomeModule {}
