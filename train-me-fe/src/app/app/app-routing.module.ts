import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/module/auth/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'app',
        pathMatch: 'full',
    },
    {
        path: 'app',
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
        loadChildren: () =>
            import('../application/application/application.module').then(
                (m) => m.ApplicationModule,
            ),
    },
    {
        path: 'login',
        loadChildren: () =>
            import('../auth/auth.module').then((m) => m.AuthModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
