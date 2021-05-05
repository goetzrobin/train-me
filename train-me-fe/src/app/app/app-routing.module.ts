import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/module/auth/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        canActivate: [AuthGuard],
        canLoad: [AuthGuard],
        loadChildren: () =>
            import('../home/home.module').then((m) => m.HomeModule),
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
