import { Injectable } from '@angular/core';
import { Attack } from '../../entities/attack';

@Injectable({
    providedIn: 'root'
})
export class AttacksEqualsHelper {

    public equalsMany(attacks1: Attack[], attacks2: Attack[]): boolean {
        if (attacks1.length !== attacks2.length) {
            return false;
        }

        for (let index = 0; index < attacks1.length; index++) {
            const attack1 = attacks1[index];
            const attack2 = attacks2[index];

            if (!this.equalsOne(attack1, attack2)) {
                return false;
            }
        }

        return true;
    }

    public equalsOne(attack1: Attack, attack2: Attack): boolean {
        if (attack1.name === attack2.name
            && attack1.bonus === attack2.bonus
            && attack1.damage === attack2.damage
            && attack1.type === attack2.type) {
                return true;
        }

        return false;
    }

}