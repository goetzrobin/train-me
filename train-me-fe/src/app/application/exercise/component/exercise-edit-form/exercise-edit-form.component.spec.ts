import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseEditFormComponent } from './exercise-edit-form.component';

describe('ExerciseEditFormComponent', () => {
  let component: ExerciseEditFormComponent;
  let fixture: ComponentFixture<ExerciseEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
