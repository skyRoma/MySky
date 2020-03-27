import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookJumpComponent } from './book-jump.component';

describe('BookJumpComponent', () => {
  let component: BookJumpComponent;
  let fixture: ComponentFixture<BookJumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookJumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookJumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
