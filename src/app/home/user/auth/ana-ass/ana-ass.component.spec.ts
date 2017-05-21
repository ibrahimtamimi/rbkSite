import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaAssComponent } from './ana-ass.component';

describe('AnaAssComponent', () => {
  let component: AnaAssComponent;
  let fixture: ComponentFixture<AnaAssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnaAssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
