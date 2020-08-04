import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog, MatTable } from '@angular/material';
import { Attack } from 'src/app/shared/entities/attack';
import { AttacksEqualsHelper } from 'src/app/shared/helpers/equals-helpers/attacksEqualsHelper';
import { AddAttackDialogComponent } from 'src/app/dialogs/add-attack-dialog/add-attack-dialog.component';

@Component({
  selector: 'app-attacks-table-container',
  templateUrl: './attacks-table-container.component.html',
  styleUrls: ['./attacks-table-container.component.css']
})
export class AttacksTableContainerComponent implements OnInit {

  @ViewChild('attacksTable') public attacksTable: MatTable<Attack>;

  @Input() attacks: Attack[];

  constructor(
    private dialog: MatDialog,
    private attacksEqualsHelper: AttacksEqualsHelper
  ) { }

  ngOnInit() {
  }

  public addAttack(): void {
    const dialog = this.dialog.open(AddAttackDialogComponent);

    dialog.afterClosed().subscribe((attack: Attack) => {
      if (!this.attacksEqualsHelper.equalsOne(attack, new Attack())) {
        this.attacks.push(attack);
        this.attacksTable.renderRows();
      }
    });
  }

  public removeAttack(attack: Attack): void {
    const attackToRemoveIndex = this.attacks.findIndex(a =>
      this.attacksEqualsHelper.equalsOne(a, attack));

    if (attackToRemoveIndex > -1) {
      this.attacks.splice(attackToRemoveIndex, 1);
      this.attacksTable.renderRows();
    }
  }

}
