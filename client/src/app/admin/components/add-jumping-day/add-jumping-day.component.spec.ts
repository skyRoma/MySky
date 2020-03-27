import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJumpingDayComponent } from './add-jumping-day.component';

describe('AddJumpingDayComponent', () => {
  let component: AddJumpingDayComponent;
  let fixture: ComponentFixture<AddJumpingDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJumpingDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJumpingDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
