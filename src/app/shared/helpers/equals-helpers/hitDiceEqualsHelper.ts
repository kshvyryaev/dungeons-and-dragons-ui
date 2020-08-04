import { Injectable } from '@angular/core';
import { HitDice } from '../../entities/hitDice';

@Injectable({
    providedIn: 'root'
})
export class HitDiceEqualsHelper {

    public equalsOne(hitDice1: HitDice, hitDice2: HitDice): boolean {
        if (hitDice1.type === hitDice2.type
            && hitDice1.total === hitDice2.total) {
                return true;
        }

        return false;
    }

}