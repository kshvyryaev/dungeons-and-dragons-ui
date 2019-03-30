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

// Shared
import { AttacksTableContainerComponent } from './shared/components/attacks-table-container/attacks-table-container.component';
import { StringsTableContainerComponent } from './shared/components/strings-table-container/strings-table-container.component';
import { ProficienciesTableContainerComponent } from './shared/components/proficiencies-table-container/proficiencies-table-container.component';
import { EquipmentTableContainerComponent } from './shared/components/equipment-table-container/equipment-table-container.component';
import { StepperMiddleButtonsComponent } from './shared/components/stepper-middle-buttons/stepper-middle-buttons.component';

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
    // Shared
    AttacksTableContainerComponent,
    StringsTableContainerComponent,
    ProficienciesTableContainerComponent,
    EquipmentTableContainerComponent,
    StepperMiddleButtonsComponent
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
