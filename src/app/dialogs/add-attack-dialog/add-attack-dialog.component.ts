import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Attack } from 'src/app/shared/entities/attack';
import { AttackFormFactory } from 'src/app/shared/factories/form-factories/attackFormFactory';

@Component({
  selector: 'app-add-attack-dialog',
  templateUrl: './add-attack-dialog.component.html',
  styleUrls: ['./add-attack-dialog.component.css']
})
export class AddAttackDialogComponent implements OnInit {

  public attack = new Attack();
  public attackForm: FormGroup;

  constructor(
    private addAttackDialog: MatDialogRef<AddAttackDialogComponent>,
    private attackFormFactory: AttackFormFactory
  ) { }

  ngOnInit() {
    this.attackForm = this.attackFormFactory.getInstance();
  }

  public addAttack(): void {
    if (!this.attackForm.valid) {
      return;
    }

    this.addAttackDialog.close(this.attack);
  }

}
