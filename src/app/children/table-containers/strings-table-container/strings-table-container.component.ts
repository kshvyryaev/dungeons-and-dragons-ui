import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTable, MatDialog } from '@angular/material';
import { AddStringDialogComponent } from 'src/app/dialogs/add-string-dialog/add-string-dialog.component';

@Component({
  selector: 'app-strings-table-container',
  templateUrl: './strings-table-container.component.html',
  styleUrls: ['./strings-table-container.component.css']
})
export class StringsTableContainerComponent implements OnInit {

  @ViewChild('elementsTable') public elementsTable: MatTable<string>;

  @Input() elements: string[];
  @Input() addStringDialogTitle: string;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  public addElement(): void {
    const dialog = this.dialog.open(AddStringDialogComponent, { data: { title: this.addStringDialogTitle } });

    dialog.afterClosed().subscribe((element: string) => {
      if (element !== undefined && element !== "") {
        this.elements.push(element);
        this.elementsTable.renderRows();
      }
    });
  }

  public removeElement(element: string): void {
    const elementToRemoveIndex = this.elements.findIndex(a => a === element);

    if (elementToRemoveIndex > -1) {
      this.elements.splice(elementToRemoveIndex, 1);
      this.elementsTable.renderRows();
    }
  }

}
