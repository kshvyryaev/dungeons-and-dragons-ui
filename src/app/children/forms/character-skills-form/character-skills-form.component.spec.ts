import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSkillsFormComponent } from './character-skills-form.component';

describe('CharacterSkillsFormComponent', () => {
  let component: CharacterSkillsFormComponent;
  let fixture: ComponentFixture<CharacterSkillsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSkillsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSkillsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
