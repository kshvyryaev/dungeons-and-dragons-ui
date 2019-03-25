import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Proficiency } from '../shared/entities/proficiency';
import { ProficiencyFormFactory } from '../shared/factories/form-factories/proficiencyFormFactory';

@Component({
  selector: 'app-add-proficiency-dialog',
  templateUrl: './add-proficiency-dialog.component.html',
  styleUrls: ['./add-proficiency-dialog.component.css']
})
export class AddProficiencyDialogComponent implements OnInit {

  public proficiency = new Proficiency();
  public proficiencyForm: FormGroup;

  constructor(
    private addProficiencyDialog: MatDialogRef<AddProficiencyDialogComponent>,
    private proficiencyFormFactory: ProficiencyFormFactory
  ) { }

  ngOnInit() {
    this.proficiencyForm = this.proficiencyFormFactory.getInstance();
  }

  public addProficiency(): void {
    if (!this.proficiencyForm.valid) {
      return;
    }

    this.addProficiencyDialog.close(this.proficiency);
  }

}
