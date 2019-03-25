import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RemoveDialogItem } from '../shared/entities/dialog-entities/removeDialogItem';
import { CharactersService } from '../shared/services/characters.service';

@Component({
  selector: 'app-remove-character-dialog',
  templateUrl: './remove-character-dialog.component.html',
  styleUrls: ['./remove-character-dialog.component.css']
})
export class RemoveCharacterDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public removeDialogItem: RemoveDialogItem,
    private dialogRef: MatDialogRef<RemoveCharacterDialogComponent>,
    private charactersService: CharactersService
  ) { }

  ngOnInit() {
  }

  public onOkClick(): void {
    this.charactersService
      .removeById(this.removeDialogItem.id)
      .subscribe(() => {
        this.dialogRef.close(true);
      });
  }

}
