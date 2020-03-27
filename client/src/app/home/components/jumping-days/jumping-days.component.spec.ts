import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpingDaysComponent } from './jumping-days.component';

describe('ScheduleComponent', () => {
  let component: JumpingDaysComponent;
  let fixture: ComponentFixture<JumpingDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JumpingDaysComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpingDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
