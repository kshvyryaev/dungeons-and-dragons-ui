import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CharacterDescription } from 'src/app/shared/entities/characterDescription';

@Component({
  selector: 'app-character-description-form',
  templateUrl: './character-description-form.component.html',
  styleUrls: ['./character-description-form.component.css']
})
export class CharacterDescriptionFormComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() characterDescription: CharacterDescription;
  @Output() characterDescriptionChange = new EventEmitter<CharacterDescription>();

  constructor() { }

  ngOnInit() { }

  public onPersonalityTraitsChange(model: string): void {
    this.characterDescription.personalityTraits = model;
    this.characterDescriptionChange.emit(this.characterDescription);
  }

  public onIdealsChange(model: string): void {
    this.characterDescription.ideals = model;
    this.characterDescriptionChange.emit(this.characterDescription);
  }

  public onBondsChange(model: string): void {
    this.characterDescription.bonds = model;
    this.characterDescriptionChange.emit(this.characterDescription);
  }

  public onFlawsChange(model: string): void {
    this.characterDescription.flaws = model;
    this.characterDescriptionChange.emit(this.characterDescription);
  }

}
