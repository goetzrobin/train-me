import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationRoutingModule } from './application-routing.module';

import { containers } from './container';
import { components } from './component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
    declarations: [...containers, ...components],
    imports: [
        CommonModule,
        ApplicationRoutingModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
    ],
})
export class ApplicationModule {}
