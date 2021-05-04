import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthSharedModule } from './../shared/module/auth/auth-shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, AuthSharedModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
