import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { services } from './service';

@NgModule({
    declarations: [],
    providers: [...services, MatSnackBar],
    imports: [CommonModule, MatSnackBarModule],
})
export class ErrorModule {}
