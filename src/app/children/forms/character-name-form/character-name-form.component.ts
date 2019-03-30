import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CharacterFormFactory } from 'src/app/shared/factories/form-factories/characterFormFactory';

@Component({
  selector: 'app-character-name-form',
  templateUrl: './character-name-form.component.html',
  styleUrls: ['./character-name-form.component.css']
})
export class CharacterNameFormComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() name: string;
  @Output() nameChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  onNameChange(model: string){        
    this.name = model;
    this.nameChange.emit(model);
}

}
