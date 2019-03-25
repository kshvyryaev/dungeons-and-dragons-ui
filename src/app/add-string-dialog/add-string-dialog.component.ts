import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StringFormFactory } from '../shared/factories/form-factories/stringFormFactory';
import { AddStringDialogItem } from '../shared/entities/dialog-entities/addStringDialogItem';

@Component({
  selector: 'app-add-string-dialog',
  templateUrl: './add-string-dialog.component.html',
  styleUrls: ['./add-string-dialog.component.css']
})
export class AddStringDialogComponent implements OnInit {

  public element: string;
  public elementForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public addStringDialogItem: AddStringDialogItem,
    private addStringDialog: MatDialogRef<AddStringDialogComponent>,
    private stringFormFactory: StringFormFactory
  ) { }

  ngOnInit() {
    this.elementForm = this.stringFormFactory.getInstance();
  }

  public addElement(): void {
    if (!this.elementForm.valid) {
      return;
    }

    this.addStringDialog.close(this.element);
  }

}
