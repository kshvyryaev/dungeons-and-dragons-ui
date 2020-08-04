import { Injectable } from '@angular/core';
import { PhysicalState } from '../../entities/physicalState';
import { HitDiceEqualsHelper } from './hitDiceEqualsHelper';
import { DeathSavesEqualsHelper } from './deathSavesEqualsHelper';

@Injectable({
    providedIn: 'root'
})
export class PhysicalStateEqualsHelper {

    constructor(
        private hitDiceEqualsHelper: HitDiceEqualsHelper,
        private deathSavesEqualsHelper: DeathSavesEqualsHelper
    ) { }

    public equalsOne(physicalState1: PhysicalState, physicalState2: PhysicalState): boolean {
        if (physicalState1.armorClass === physicalState2.armorClass
            && physicalState1.initiative === physicalState2.initiative
            && physicalState1.speed === physicalState2.speed
            && physicalState1.maxHitPoints === physicalState2.maxHitPoints
            && physicalState1.currentHitPoints === physicalState2.currentHitPoints
            && physicalState1.temporaryHitPoints === physicalState2.temporaryHitPoints
            && this.hitDiceEqualsHelper.equalsOne(physicalState1.hitDice, physicalState2.hitDice)
            && this.deathSavesEqualsHelper.equalsOne(physicalState1.deathSaves, physicalState2.deathSaves)) {
                return true;
        }

        return false;
    }

}