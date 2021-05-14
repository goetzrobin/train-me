import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExerciseCardComponent } from './home-exercise-card.component';

describe('HomeExerciseCardComponent', () => {
  let component: HomeExerciseCardComponent;
  let fixture: ComponentFixture<HomeExerciseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeExerciseCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeExerciseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
