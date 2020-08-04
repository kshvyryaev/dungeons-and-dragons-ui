import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterPhysicalStateFormComponent } from './character-physical-state-form.component';

describe('CharacterPhysicalStateFormComponent', () => {
  let component: CharacterPhysicalStateFormComponent;
  let fixture: ComponentFixture<CharacterPhysicalStateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterPhysicalStateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterPhysicalStateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
