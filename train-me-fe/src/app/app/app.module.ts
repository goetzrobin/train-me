import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AuthSharedModule } from './../shared/module/auth/auth-shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './container/app/app.component';
import { containers } from './container';
import { reducers, State } from './store';

import { environment } from 'src/environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [storeFreeze]
    : [];

@NgModule({
    declarations: [...containers],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthSharedModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
