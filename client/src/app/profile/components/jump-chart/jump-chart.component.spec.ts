import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpChartComponent } from './jump-chart.component';

describe('JumpChartComponent', () => {
  let component: JumpChartComponent;
  let fixture: ComponentFixture<JumpChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumpChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
