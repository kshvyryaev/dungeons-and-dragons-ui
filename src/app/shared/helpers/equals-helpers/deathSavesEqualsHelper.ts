import { Injectable } from '@angular/core';
import { DeathSaves } from '../../entities/deathSaves';

@Injectable({
    providedIn: 'root'
})
export class DeathSavesEqualsHelper {

    public equalsOne(deathSaves1: DeathSaves, deathSaves2: DeathSaves): boolean {
        if (deathSaves1.successes === deathSaves2.successes
            && deathSaves1.failures === deathSaves2.failures) {
                return true;
        }

        return false;
    }

}