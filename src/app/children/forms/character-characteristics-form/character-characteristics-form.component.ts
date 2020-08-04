import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Characteristics } from 'src/app/shared/entities/characteristics';

@Component({
  selector: 'app-character-characteristics-form',
  templateUrl: './character-characteristics-form.component.html',
  styleUrls: ['./character-characteristics-form.component.css']
})
export class CharacterCharacteristicsFormComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() characteristics: Characteristics;
  @Input() inspiration: number;
  @Input() proficiencyBonus: number;
  @Input() passiveWisdom: number;
  @Output() characteristicsChange = new EventEmitter<Characteristics>();
  @Output() inspirationChange = new EventEmitter<number>();
  @Output() proficiencyBonusChange = new EventEmitter<number>();
  @Output() passiveWisdomChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  public onStrengthChange(model: number): void {
    this.characteristics.strength = model;
    this.characteristicsChange.emit(this.characteristics);
  }

  public onConstitutionChange(model: number): void {
    this.characteristics.constitution = model;
    this.characteristicsChange.emit(this.characteristics);
  }

  public onDexterityChange(model: number): void {
    this.characteristics.dexterity = model;
    this.characteristicsChange.emit(this.characteristics);
  }

  public onIntelligenceChange(model: number): void {
    this.characteristics.intelligence = model;
    this.characteristicsChange.emit(this.characteristics);
  }

  public onWisdomChange(model: number): void {
    this.characteristics.wisdom = model;
    this.characteristicsChange.emit(this.characteristics);
  }

  public onCharismaChange(model: number): void {
    this.characteristics.charisma = model;
    this.characteristicsChange.emit(this.characteristics);
  }

  public onInspirationChange(model: number): void {
    this.inspiration = model;
    this.inspirationChange.emit(model);
  }

  public onProficiencyBonusChange(model: number): void {
    this.proficiencyBonus = model;
    this.proficiencyBonusChange.emit(model);
  }

  public onPassiveWisdomChange(model: number): void {
    this.passiveWisdom = model;
    this.passiveWisdomChange.emit(model);
  }

}
