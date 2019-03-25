import { Injectable } from '@angular/core';
import { GameState } from '../../entities/gameState';

@Injectable({
    providedIn: 'root'
})
export class GameStateCopyHelper {

    public copyOne(gameState: GameState): GameState {
        const gameStateCopy = new GameState();
        gameStateCopy.class = gameState.class;
        gameStateCopy.level = gameState.level;
        gameStateCopy.background = gameState.background;
        gameStateCopy.faction = gameState.faction;
        gameStateCopy.race = gameState.race;
        gameStateCopy.experiencePoints = gameState.experiencePoints;

        return gameStateCopy;
    }

}