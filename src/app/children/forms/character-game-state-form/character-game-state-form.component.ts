import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GameState } from 'src/app/shared/entities/gameState';

@Component({
  selector: 'app-character-game-state-form',
  templateUrl: './character-game-state-form.component.html',
  styleUrls: ['./character-game-state-form.component.css']
})
export class CharacterGameStateFormComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() gameState: GameState;
  @Output() gameStateChange = new EventEmitter<GameState>();

  constructor() { }

  ngOnInit() {
  }

  public onClassChange(model: string): void {
    this.gameState.class = model;
    this.gameStateChange.emit(this.gameState);
  }

  public onLevelChange(model: number): void {
    this.gameState.level = model;
    this.gameStateChange.emit(this.gameState);
  }

  public onBackgroundChange(model: string): void {
    this.gameState.background = model;
    this.gameStateChange.emit(this.gameState);
  }

  public onFactionChange(model: string): void {
    this.gameState.faction = model;
    this.gameStateChange.emit(this.gameState);
  }

  public onRaceChange(model: string): void {
    this.gameState.race = model;
    this.gameStateChange.emit(this.gameState);
  }

  public onExperiencePointsChange(model: number): void {
    this.gameState.experiencePoints = model;
    this.gameStateChange.emit(this.gameState);
  }

}
