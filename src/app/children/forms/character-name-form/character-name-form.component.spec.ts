import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterNameFormComponent } from './character-name-form.component';

describe('CharacterNameFormComponent', () => {
  let component: CharacterNameFormComponent;
  let fixture: ComponentFixture<CharacterNameFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterNameFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterNameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
