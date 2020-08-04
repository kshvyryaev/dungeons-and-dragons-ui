import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentTableContainerComponent } from './equipment-table-container.component';

describe('EquipmentTableContainerComponent', () => {
  let component: EquipmentTableContainerComponent;
  let fixture: ComponentFixture<EquipmentTableContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentTableContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
