import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stepper-middle-buttons',
  templateUrl: './stepper-middle-buttons.component.html',
  styleUrls: ['./stepper-middle-buttons.component.css']
})
export class StepperMiddleButtonsComponent implements OnInit {

  @Output() onCanceled = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  public cancel(): void {
    this.onCanceled.emit();
  }

}
