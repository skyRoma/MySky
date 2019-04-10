import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpTableComponent } from './jump-table.component';

describe('JumpTableComponent', () => {
  let component: JumpTableComponent;
  let fixture: ComponentFixture<JumpTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumpTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
