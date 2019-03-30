import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

// Parents
import { CharactersPageComponent } from './parents/characters-page/characters-page.component';
import { CharacterPageComponent } from './parents/character-page/character-page.component';
import { NavbarComponent } from './parents/navbar/navbar.component';

// Dialogs
import { AddCharacterDialogComponent } from './dialogs/add-character-dialog/add-character-dialog.component';
import { AddAttackDialogComponent } from './dialogs/add-attack-dialog/add-attack-dialog.component';
import { AddStringDialogComponent } from './dialogs/add-string-dialog/add-string-dialog.component';
import { AddProficiencyDialogComponent } from './dialogs/add-proficiency-dialog/add-proficiency-dialog.component';
import { AddEquipmentDialogComponent } from './dialogs/add-equipment-dialog/add-equipment-dialog.component';
import { RemoveCharacterDialogComponent } from './dialogs/remove-character-dialog/remove-character-dialog.component';

// Children
import { AttacksTableContainerComponent } from './children/table-containers/attacks-table-container/attacks-table-container.component';
import { StringsTableContainerComponent } from './children/table-containers/strings-table-container/strings-table-container.component';
import { ProficienciesTableContainerComponent } from './children/table-containers/proficiencies-table-container/proficiencies-table-container.component';
import { EquipmentTableContainerComponent } from './children/table-containers/equipment-table-container/equipment-table-container.component';
import { StepperMiddleButtonsComponent } from './children/buttons/stepper-middle-buttons/stepper-middle-buttons.component';
import { CharacterNameFormComponent } from './children/forms/character-name-form/character-name-form.component';
import { CharacterGameStateFormComponent } from './children/forms/character-game-state-form/character-game-state-form.component';
import { CharacterDescriptionFormComponent } from './children/forms/character-description-form/character-description-form.component';
import { CharacterCharacteristicsFormComponent } from './children/forms/character-characteristics-form/character-characteristics-form.component';
import { CharacterSkillsFormComponent } from './children/forms/character-skills-form/character-skills-form.component';

@NgModule({
  declarations: [
    AppComponent,
    // Parents
    CharactersPageComponent,
    CharacterPageComponent,
    NavbarComponent,
    // Dialogs
    AddCharacterDialogComponent,
    AddAttackDialogComponent,
    AddStringDialogComponent,
    AddProficiencyDialogComponent,
    AddEquipmentDialogComponent,
    RemoveCharacterDialogComponent,
    // Children
    AttacksTableContainerComponent,
    StringsTableContainerComponent,
    ProficienciesTableContainerComponent,
    EquipmentTableContainerComponent,
    StepperMiddleButtonsComponent,
    CharacterNameFormComponent,
    CharacterGameStateFormComponent,
    CharacterDescriptionFormComponent,
    CharacterCharacteristicsFormComponent,
    CharacterSkillsFormComponent
  ],
  entryComponents: [
    // Dialogs
    AddCharacterDialogComponent,
    AddAttackDialogComponent,
    AddStringDialogComponent,
    AddProficiencyDialogComponent,
    AddEquipmentDialogComponent,
    RemoveCharacterDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
