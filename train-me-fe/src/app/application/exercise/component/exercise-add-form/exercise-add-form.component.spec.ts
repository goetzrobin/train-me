import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseAddFormComponent } from './exercise-add-form.component';

describe('ExerciseAddFormComponent', () => {
    let component: ExerciseAddFormComponent;
    let fixture: ComponentFixture<ExerciseAddFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExerciseAddFormComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ExerciseAddFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
