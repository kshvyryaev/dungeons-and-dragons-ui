import { Injectable } from '@angular/core';
import { PhysicalState } from '../../entities/physicalState';
import { HitDiceCopyHelper } from './hitDiceCopyHelper';
import { DeathSavesCopyHelper } from './deathSavesCopyHelper';

@Injectable({
    providedIn: 'root'
})
export class PhysicalStateCopyHelper {

    constructor(
        private hitDiceCopyHelper: HitDiceCopyHelper,
        private deathSavesCopyHelper: DeathSavesCopyHelper
    ) { }

    public copyOne(physicalState: PhysicalState): PhysicalState {
        const physicalStateCopy = new PhysicalState();
        physicalStateCopy.armorClass = physicalState.armorClass;
        physicalStateCopy.initiative = physicalState.initiative;
        physicalStateCopy.speed = physicalState.speed;
        physicalStateCopy.maxHitPoints = physicalState.maxHitPoints;
        physicalStateCopy.currentHitPoints = physicalState.currentHitPoints;
        physicalStateCopy.temporaryHitPoints = physicalState.temporaryHitPoints;
        physicalStateCopy.hitDice = this.hitDiceCopyHelper.copyOne(physicalState.hitDice);
        physicalStateCopy.deathSaves = this.deathSavesCopyHelper.copyOne(physicalState.deathSaves);

        return physicalStateCopy;
    }

}