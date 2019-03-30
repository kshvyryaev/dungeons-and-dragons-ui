import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttacksTableContainerComponent } from './attacks-table-container.component';

describe('AttacksTableContainerComponent', () => {
  let component: AttacksTableContainerComponent;
  let fixture: ComponentFixture<AttacksTableContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttacksTableContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttacksTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
