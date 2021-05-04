import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { guards, services } from './service';

@NgModule({
    providers: [...services, ...guards],
    imports: [CommonModule, HttpClientModule],
})
export class AuthSharedModule {}
