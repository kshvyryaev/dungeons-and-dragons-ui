import { Injectable } from '@angular/core';
import { GameState } from '../../entities/gameState';
import { EqualsHelper } from './equalsHelper';

@Injectable({
    providedIn: 'root'
})
export class GameStateEqualsHelper {

    constructor(private equalsHelper: EqualsHelper) { }

    equalsOne(gameState1: GameState, gameState2: GameState): boolean {
        if (gameState1.class === gameState2.class
            && gameState1.level === gameState2.level
            && this.equalsHelper.isNonRequiredStringsEqual(gameState1.background, gameState2.background)
            && gameState1.faction === gameState2.faction
            && gameState1.race === gameState2.race
            && gameState1.experiencePoints === gameState2.experiencePoints) {
                return true;
        }

        return false;
    }

}