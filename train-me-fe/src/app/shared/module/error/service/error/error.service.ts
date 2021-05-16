import { Injectable } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarRef,
    TextOnlySnackBar,
} from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class ErrorService {
    constructor(private snackBar: MatSnackBar) {}

    public displayError(error: string): MatSnackBarRef<TextOnlySnackBar> {
        return this.snackBar.open(error, 'dismiss');
    }
}
