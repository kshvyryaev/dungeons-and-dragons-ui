import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';

import { Character } from '../../shared/entities/character';
import { CharactersEqualsHelper } from '../../shared/helpers/equals-helpers/charactersEqualsHelper';
import { CharactersService } from '../../shared/services/characters.service';
import { AddCharacterDialogComponent } from '../../dialogs/add-character-dialog/add-character-dialog.component';
import { RemoveCharacterDialogComponent } from '../../dialogs/remove-character-dialog/remove-character-dialog.component';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.css']
})
export class CharactersPageComponent implements OnInit {

  @ViewChild('table') public table: MatTable<Character>;
  @ViewChild(MatPaginator) public paginator: MatPaginator;

  public isCharactersLoading = true;
  public characters: MatTableDataSource<Character>;

  constructor(
    private dialog: MatDialog,
    private charactersEqualsHelper: CharactersEqualsHelper,
    private charactersService: CharactersService
  ) { }

  ngOnInit() {
    this.loadCharacters();
  }

  public addCharacter(): void {
    const dialog = this.dialog.open(AddCharacterDialogComponent);

    dialog.afterClosed().subscribe((character: Character) => {
      if (!this.charactersEqualsHelper.equalsOne(character, new Character())) {
        const newCharacters = this.characters.data;
        newCharacters.push(character);
        this.updateRows(newCharacters);
      }
    });
  }

  public removeCharacter(character: Character): void {
    const dialog = this.dialog.open(RemoveCharacterDialogComponent, { data: { id: character.id, name: character.name } });
  
    dialog.afterClosed().subscribe((result: boolean) => {
      if (result) {
        const newCharacters = this.characters.data;
        const characterToRemoveIndex = this.characters.data.findIndex(c => c.id === character.id);

        if (characterToRemoveIndex > -1) {
          newCharacters.splice(characterToRemoveIndex, 1);
          this.updateRows(newCharacters);
        }
      }
    });
  }

  private updateRows(characters: Character[]): void {
    this.characters.data = characters;
    this.table.renderRows();
  }

  private loadCharacters(): void {
    this.charactersService
      .getAll()
      .subscribe((characters: Character[]) => {
        this.isCharactersLoading = false;
        this.characters = new MatTableDataSource<Character>(characters);
        this.characters.paginator = this.paginator;
      });
  }

}