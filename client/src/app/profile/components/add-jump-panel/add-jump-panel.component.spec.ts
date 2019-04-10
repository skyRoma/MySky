import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJumpPanelComponent } from './add-jump-panel.component';

describe('AddJumpPanelComponent', () => {
  let component: AddJumpPanelComponent;
  let fixture: ComponentFixture<AddJumpPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJumpPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJumpPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
