import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Equipment } from 'src/app/shared/entities/equipment';
import { EquipmentFormFactory } from 'src/app/shared/factories/form-factories/equipmentFormFactory';

@Component({
  selector: 'app-add-equipment-dialog',
  templateUrl: './add-equipment-dialog.component.html',
  styleUrls: ['./add-equipment-dialog.component.css']
})
export class AddEquipmentDialogComponent implements OnInit {

  public equipment = new Equipment();
  public equipmentForm: FormGroup;

  constructor(
    private addEquipmentDialog: MatDialogRef<AddEquipmentDialogComponent>,
    private equipmentFormFactory: EquipmentFormFactory
  ) { }

  ngOnInit() {
    this.equipmentForm = this.equipmentFormFactory.getInstance();
  }

  public addEquipment(): void {
    if (!this.equipmentForm.valid) {
      return;
    }

    this.addEquipmentDialog.close(this.equipment);
  }

}
