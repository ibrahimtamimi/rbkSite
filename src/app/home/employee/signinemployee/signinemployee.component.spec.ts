import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninemployeeComponent } from './signinemployee.component';

describe('SigninemployeeComponent', () => {
  let component: SigninemployeeComponent;
  let fixture: ComponentFixture<SigninemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninemployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
