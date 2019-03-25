import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTable, MatDialog } from '@angular/material';
import { Proficiency } from '../../entities/proficiency';
import { ProficienciesEqualsHelper } from '../../helpers/equals-helpers/proficienciesEqualsHelper';
import { AddProficiencyDialogComponent } from 'src/app/add-proficiency-dialog/add-proficiency-dialog.component';

@Component({
  selector: 'app-proficiencies-table-container',
  templateUrl: './proficiencies-table-container.component.html',
  styleUrls: ['./proficiencies-table-container.component.css']
})
export class ProficienciesTableContainerComponent implements OnInit {

  @ViewChild('proficienciesTable') public proficienciesTable: MatTable<Proficiency>;

  @Input() proficiencies: Proficiency[];

  constructor(
    private dialog: MatDialog,
    private proficienciesEqualsHelper: ProficienciesEqualsHelper
  ) { }

  ngOnInit() {
  }

  public addProficiency(): void {
    const dialog = this.dialog.open(AddProficiencyDialogComponent);

    dialog.afterClosed().subscribe((proficiency: Proficiency) => {
      if (!this.proficienciesEqualsHelper.equalsOne(proficiency, new Proficiency())) {
        this.proficiencies.push(proficiency);
        this.proficienciesTable.renderRows();
      }
    });
  }

  public removeProficiency(proficiency: Proficiency): void {
    const proficiencyToRemoveIndex = this.proficiencies.findIndex(p =>
      this.proficienciesEqualsHelper.equalsOne(p, proficiency));

    if (proficiencyToRemoveIndex > -1) {
      this.proficiencies.splice(proficiencyToRemoveIndex, 1);
      this.proficienciesTable.renderRows();
    }
  }

}
