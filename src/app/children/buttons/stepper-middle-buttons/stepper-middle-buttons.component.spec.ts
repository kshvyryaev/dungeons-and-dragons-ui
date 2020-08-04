import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperMiddleButtonsComponent } from './stepper-middle-buttons.component';

describe('StepperMiddleButtonsComponent', () => {
  let component: StepperMiddleButtonsComponent;
  let fixture: ComponentFixture<StepperMiddleButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperMiddleButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperMiddleButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
