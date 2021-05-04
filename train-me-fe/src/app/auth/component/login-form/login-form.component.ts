import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    OnInit,
    Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginFormData } from '../../model/LoginFormData';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
    @Output()
    public onFormSubmit = new EventEmitter<LoginFormData>();

    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    ngOnInit(): void {}

    public submitForm(): void {
        this.onFormSubmit.emit(this.form.value);
    }
}
