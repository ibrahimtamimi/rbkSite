import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindestAssComponent } from './mindest-ass.component';

describe('MindestAssComponent', () => {
  let component: MindestAssComponent;
  let fixture: ComponentFixture<MindestAssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindestAssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindestAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
