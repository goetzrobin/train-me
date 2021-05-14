import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Exercise } from 'src/app/shared/module/exercise/model/Exercise';
import { ExercisePatchDTO } from 'src/app/shared/module/exercise/model/ExercisePatchDTO';
import { ExercisePostDTO } from 'src/app/shared/module/exercise/model/ExercisePostDTO';

@Component({
    selector: 'app-exercise-add-form',
    templateUrl: './exercise-add-form.component.html',
    styleUrls: ['./exercise-add-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseAddFormComponent implements OnChanges {
    @Output()
    public exerciseCreate = new EventEmitter<ExercisePostDTO>();

    public exerciseForm = this.fb.group({
        name: ['', Validators.required],
        description: [''],
    });

    constructor(private fb: FormBuilder) {}

    ngOnChanges(): void {}

    public updateExercise(): void {
        this.exerciseCreate.emit({
            ...this.exerciseForm.value,
        });
    }
}
