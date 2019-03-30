import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDescriptionFormComponent } from './character-description-form.component';

describe('CharacterDescriptionFormComponent', () => {
  let component: CharacterDescriptionFormComponent;
  let fixture: ComponentFixture<CharacterDescriptionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterDescriptionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDescriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
