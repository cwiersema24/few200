import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayUpcommingComponent } from './display-upcomming.component';

describe('DisplayUpcommingComponent', () => {
  let component: DisplayUpcommingComponent;
  let fixture: ComponentFixture<DisplayUpcommingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayUpcommingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayUpcommingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
