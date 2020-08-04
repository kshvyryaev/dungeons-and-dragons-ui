import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCharacteristicsFormComponent } from './character-characteristics-form.component';

describe('CharacterCharacteristicsFormComponent', () => {
  let component: CharacterCharacteristicsFormComponent;
  let fixture: ComponentFixture<CharacterCharacteristicsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCharacteristicsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCharacteristicsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
