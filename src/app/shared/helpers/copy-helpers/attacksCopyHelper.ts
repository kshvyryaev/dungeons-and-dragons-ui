import { Injectable } from '@angular/core';
import { Attack } from '../../entities/attack';

@Injectable({
    providedIn: 'root'
})
export class AttacksCopyHelper {

    public copyMany(attacks: Attack[]): Attack[] {
        const attacksCopy: Attack[] = [];

        attacks.forEach(attack => {
            const attackCopy = this.copyOne(attack);
            attacksCopy.push(attackCopy);
        });

        return attacksCopy;
    }

    public copyOne(attack: Attack): Attack {
        const attackCopy = new Attack();
        attackCopy.name = attack.name;
        attackCopy.bonus = attack.bonus;
        attackCopy.damage = attack.damage;
        attackCopy.type = attack.type;

        return attackCopy;
    }

}