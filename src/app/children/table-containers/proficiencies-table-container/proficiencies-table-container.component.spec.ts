import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProficienciesTableContainerComponent } from './proficiencies-table-container.component';

describe('ProficienciesTableContainerComponent', () => {
  let component: ProficienciesTableContainerComponent;
  let fixture: ComponentFixture<ProficienciesTableContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProficienciesTableContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProficienciesTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
