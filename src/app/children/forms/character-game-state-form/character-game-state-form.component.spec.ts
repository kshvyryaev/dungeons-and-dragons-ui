import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterGameStateFormComponent } from './character-game-state-form.component';

describe('CharacterGameStateFormComponent', () => {
  let component: CharacterGameStateFormComponent;
  let fixture: ComponentFixture<CharacterGameStateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterGameStateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterGameStateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
