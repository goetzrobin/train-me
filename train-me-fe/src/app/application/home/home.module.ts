import { LazyInterceptor } from '../../shared/config/LazyInterceptor';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './container/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthSharedModule } from '../../shared/module/auth/auth-shared.module';
import { AuthGuard } from '../../shared/module/auth/guard/auth.guard';
import { SharedExerciseModule } from '../../shared/module/exercise/shared-exercise.module';

import { containers } from './container';
import { services } from './service';
import { components } from './component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

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
        CommonModule,
        RouterModule.forChild(routes),
        AuthSharedModule,
        SharedExerciseModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
    ],
    providers: [...services, LazyInterceptor],
})
export class HomeModule {}
