import { LazyInterceptor } from './../shared/config/LazyInterceptor';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthSharedModule } from '../shared/module/auth/auth-shared.module';
import { AuthGuard } from '../shared/module/auth/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: HomeComponent,
    },
];

@NgModule({
    declarations: [HomeComponent],
    imports: [
        HttpClientModule,
        AuthSharedModule,
        CommonModule,
        RouterModule.forChild(routes),
    ],
    providers: [HomeService, LazyInterceptor],
})
export class HomeModule {}
