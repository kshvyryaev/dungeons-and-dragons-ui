import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttackDialogComponent } from './add-attack-dialog.component';

describe('AddAttackDialogComponent', () => {
  let component: AddAttackDialogComponent;
  let fixture: ComponentFixture<AddAttackDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAttackDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAttackDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
