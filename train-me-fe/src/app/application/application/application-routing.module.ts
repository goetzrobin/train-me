import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../shared/module/auth/guard/auth.guard';
import ApplicationComponent from './container';

const routes: Routes = [
    {
        path: '',
        component: ApplicationComponent,
        children: [
            {
                path: '',
                canActivate: [AuthGuard],
                canLoad: [AuthGuard],
                loadChildren: () =>
                    import('../home/home.module').then((m) => m.HomeModule),
            },
            {
                path: 'exercise',
                canActivate: [AuthGuard],
                canLoad: [AuthGuard],
                loadChildren: () =>
                    import('../exercise/exercise.module').then(
                        (m) => m.ExerciseModule,
                    ),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ApplicationRoutingModule {}
