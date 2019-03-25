import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProficiencyDialogComponent } from './add-proficiency-dialog.component';

describe('AddProficiencyDialogComponent', () => {
  let component: AddProficiencyDialogComponent;
  let fixture: ComponentFixture<AddProficiencyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProficiencyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProficiencyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
