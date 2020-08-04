import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PhysicalState } from 'src/app/shared/entities/physicalState';

@Component({
  selector: 'app-character-physical-state-form',
  templateUrl: './character-physical-state-form.component.html',
  styleUrls: ['./character-physical-state-form.component.css']
})
export class CharacterPhysicalStateFormComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() physicalState: PhysicalState;
  @Output() physicalStateChange = new EventEmitter<PhysicalState>();

  constructor() { }

  ngOnInit() { }

  public onArmorClassChange(model: number): void {
    this.physicalState.armorClass = model;
    this.physicalStateChange.emit(this.physicalState);
  }

  public onInitiativeChange(model: number): void {
    this.physicalState.initiative = model;
    this.physicalStateChange.emit(this.physicalState);
  }

  public onSpeedChange(model: number): void {
    this.physicalState.speed = model;
    this.physicalStateChange.emit(this.physicalState);
  }

  public onMaxHitPointsChange(model: number): void {
    this.physicalState.maxHitPoints = model;
    this.physicalStateChange.emit(this.physicalState);
  }

  public onCurrentHitPointsChange(model: number): void {
    this.physicalState.currentHitPoints = model;
    this.physicalStateChange.emit(this.physicalState);
  }

  public onTemporaryHitPointsChange(model: number): void {
    this.physicalState.temporaryHitPoints = model;
    this.physicalStateChange.emit(this.physicalState);
  }

  public onTypeChange(model: string): void {
    this.physicalState.hitDice.type = model;
    this.physicalStateChange.emit(this.physicalState);
  }

  public onTotalChange(model: number): void {
    this.physicalState.hitDice.total = model;
    this.physicalStateChange.emit(this.physicalState);
  }

  public onSuccessesChange(model: number): void {
    this.physicalState.deathSaves.successes = model;
    this.physicalStateChange.emit(this.physicalState);
  }

  public onFailuresChange(model: number): void {
    this.physicalState.deathSaves.failures = model;
    this.physicalStateChange.emit(this.physicalState);
  }

}
