import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyInterceptor } from '../../shared/config/LazyInterceptor';
import { SharedExerciseModule } from '../../shared/module/exercise/shared-exercise.module';
import { AuthGuard } from '../../shared/module/auth/guard/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { containers } from './container';
import { components } from './component';

import { ExerciseEditComponent } from './container/exercise-edit/exercise-edit.component';
import { ExerciseComponent } from './container/exercise/exercise.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ExerciseAddComponent } from './container/exercise-add/exercise-add.component';
import { ErrorModule } from 'src/app/shared/module/error/error.module';
import { ErrorService } from 'src/app/shared/module/error/service/error/error.service';

const routes: Routes = [
    {
        path: 'edit/:id',
        canActivate: [AuthGuard],
        component: ExerciseEditComponent,
    },
    {
        path: 'add',
        canActivate: [AuthGuard],
        component: ExerciseAddComponent,
    },
    {
        path: '**',
        canActivate: [AuthGuard],
        component: ExerciseComponent,
    },
];

@NgModule({
    declarations: [...containers, ...components],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedExerciseModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        ErrorModule,
    ],
    providers: [LazyInterceptor, ErrorService],
})
export class ExerciseModule {}
