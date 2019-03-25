import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog, MatTable } from '@angular/material';
import { Equipment } from '../../entities/equipment';
import { EquipmentEqualsHelper } from '../../helpers/equals-helpers/equipmentEqualsHelper';
import { AddEquipmentDialogComponent } from 'src/app/add-equipment-dialog/add-equipment-dialog.component';

@Component({
  selector: 'app-equipment-table-container',
  templateUrl: './equipment-table-container.component.html',
  styleUrls: ['./equipment-table-container.component.css']
})
export class EquipmentTableContainerComponent implements OnInit {

  @ViewChild('equipmentTable') public equipmentTable: MatTable<Equipment>;

  @Input() equipment: Equipment[];

  constructor(
    private dialog: MatDialog,
    private equipmentEqualsHelper: EquipmentEqualsHelper
  ) { }

  ngOnInit() {
  }

  public addEquipment(): void {
    const dialog = this.dialog.open(AddEquipmentDialogComponent);

    dialog.afterClosed().subscribe((equipment: Equipment) => {
      if (!this.equipmentEqualsHelper.equalsOne(equipment, new Equipment())) {
        this.equipment.push(equipment);
        this.equipmentTable.renderRows();
      }
    });
  }

  public removeEquipment(equipment: Equipment): void {
    const equipmentToRemoveIndex = this.equipment.findIndex(e =>
      this.equipmentEqualsHelper.equalsOne(e, equipment));

    if (equipmentToRemoveIndex > -1) {
      this.equipment.splice(equipmentToRemoveIndex, 1);
      this.equipmentTable.renderRows();
    }
  }

}
