import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPastComponent } from './display-past.component';

describe('DisplayPastComponent', () => {
  let component: DisplayPastComponent;
  let fixture: ComponentFixture<DisplayPastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
