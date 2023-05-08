import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdditGoalComponent } from './eddit-goal.component';

describe('EdditGoalComponent', () => {
  let component: EdditGoalComponent;
  let fixture: ComponentFixture<EdditGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdditGoalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdditGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
