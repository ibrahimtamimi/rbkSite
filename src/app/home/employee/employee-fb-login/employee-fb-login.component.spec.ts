import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFbLoginComponent } from './employee-fb-login.component';

describe('EmployeeFbLoginComponent', () => {
  let component: EmployeeFbLoginComponent;
  let fixture: ComponentFixture<EmployeeFbLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeFbLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFbLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
