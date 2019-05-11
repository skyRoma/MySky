import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpPanelComponent } from './jump-panel.component';

describe('AddJumpPanelComponent', () => {
  let component: JumpPanelComponent;
  let fixture: ComponentFixture<JumpPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JumpPanelComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
