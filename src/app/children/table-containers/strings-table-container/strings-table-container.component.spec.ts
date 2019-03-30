import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringsTableContainerComponent } from './strings-table-container.component';

describe('StringsTableContainerComponent', () => {
  let component: StringsTableContainerComponent;
  let fixture: ComponentFixture<StringsTableContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringsTableContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringsTableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
