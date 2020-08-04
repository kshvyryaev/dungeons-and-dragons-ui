import { Injectable } from '@angular/core';
import { HitDice } from '../../entities/hitDice';

@Injectable({
    providedIn: 'root'
})
export class HitDiceCopyHelper {

    public copyOne(hitDice: HitDice): HitDice {
        const hitDiceCopy = new HitDice();
        hitDiceCopy.type = hitDice.type;
        hitDiceCopy.total = hitDice.total;
        
        return hitDiceCopy;
    }

}