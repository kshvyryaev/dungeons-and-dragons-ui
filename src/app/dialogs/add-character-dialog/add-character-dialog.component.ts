import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatTable } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { Character } from 'src/app/shared/entities/character';
import { CharacterFormFactory } from 'src/app/shared/factories/form-factories/characterFormFactory';
import { CharactersService } from 'src/app/shared/services/characters.service';
import { Attack } from 'src/app/shared/entities/attack';

@Component({
  selector: 'app-add-character-dialog',
  templateUrl: './add-character-dialog.component.html',
  styleUrls: ['./add-character-dialog.component.css']
})
export class AddCharacterDialogComponent implements OnInit {

  @ViewChild('attacksTable') public attacksTable: MatTable<Attack>;

  public character = new Character();
  public firstStepForm: FormGroup;
  public secondStepForm: FormGroup;
  public thirdStepForm: FormGroup;
  public fourthStepForm: FormGroup;
  public fifthStepForm: FormGroup;
  public sixthStepForm: FormGroup;
  
  public static LANGUAGES_ADD_STRING_DIALOG_TITLE = "Добавлние навыка";
  public static FEATURES_ADD_STRING_DIALOG_TITLE = "Добавлние особенности";
  
  constructor(
    private addCharacterDialog: MatDialogRef<AddCharacterDialogComponent>,
    private characterFormFactory: CharacterFormFactory,
    private charactersService: CharactersService
  ) { }

  ngOnInit() {
    this.loadForms();
  }

  public availabeToAddCharacter(): boolean {
    if (this.firstStepForm.valid
      && this.secondStepForm.valid
      && this.thirdStepForm.valid
      && this.fourthStepForm.valid
      && this.fifthStepForm.valid
      && this.sixthStepForm.valid) {
        return true;
    }

    return false;
  }

  public addCharacter(): void {
    if (!this.availabeToAddCharacter()) {
      return;
    }

    this.prepareCharacterBeforeAdding();

    this.charactersService
      .add(this.character)
      .subscribe(response => {
        this.addCharacterDialog.close(<Character>response.body);
      });
  }

  public cancel(): void {
    this.addCharacterDialog.close(new Character());
  }

  private prepareCharacterBeforeAdding(): void {
    if (this.character.gameState.experiencePoints === undefined) {
      this.character.gameState.experiencePoints = 0;
    }

    if (this.character.physicalState.currentHitPoints === undefined
      || (this.character.physicalState.currentHitPoints !== undefined
          && this.character.physicalState.currentHitPoints > this.character.physicalState.maxHitPoints)) {
      this.character.physicalState.currentHitPoints = this.character.physicalState.maxHitPoints;
    }

    if (this.character.physicalState.temporaryHitPoints === undefined) {
      this.character.physicalState.temporaryHitPoints = 0;
    }

    if (this.character.physicalState.deathSaves.successes === undefined) {
      this.character.physicalState.deathSaves.successes = 0;
    }

    if (this.character.physicalState.deathSaves.failures === undefined) {
      this.character.physicalState.deathSaves.failures = 0;
    }
  }

  private loadForms(): void {
    this.firstStepForm = this.characterFormFactory.getFirstStepForm();
    this.secondStepForm = this.characterFormFactory.getSecondStepForm();
    this.thirdStepForm = this.characterFormFactory.getThirdStepForm();
    this.fourthStepForm = this.characterFormFactory.getFourthStepForm();
    this.fifthStepForm = this.characterFormFactory.getFifthStepForm();
    this.sixthStepForm = this.characterFormFactory.getSixthStepForm();
  }

}
