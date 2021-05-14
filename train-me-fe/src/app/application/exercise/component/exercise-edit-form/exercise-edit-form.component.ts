import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Exercise } from 'src/app/shared/module/exercise/model/Exercise';
import { ExercisePatchDTO } from 'src/app/shared/module/exercise/model/ExercisePatchDTO';

@Component({
    selector: 'app-exercise-edit-form',
    templateUrl: './exercise-edit-form.component.html',
    styleUrls: ['./exercise-edit-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseEditFormComponent implements OnChanges {
    @Input()
    public exerciseToBeEdited: Exercise | null | undefined;
    @Output()
    public exerciseUpdate = new EventEmitter<ExercisePatchDTO>();

    public exerciseForm = this.fb.group({
        description: [''],
    });

    constructor(private fb: FormBuilder) {}

    ngOnChanges(): void {
        if (this.exerciseToBeEdited?.description) {
            this.exerciseForm
                .get('description')
                ?.setValue(this.exerciseToBeEdited?.description);
        }
    }

    public updateExercise(): void {
        this.exerciseUpdate.emit({
            ...this.exerciseToBeEdited,
            ...this.exerciseForm.value,
        });
    }
}
