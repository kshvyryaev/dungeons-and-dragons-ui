import { Injectable } from '@angular/core';
import { Equipment } from '../../entities/equipment';

@Injectable({
    providedIn: 'root'
})
export class EquipmentEqualsHelper {

    public equalsMany(equipmentCollection1: Equipment[], equipmentCollection2: Equipment[]): boolean {
        if (equipmentCollection1.length !== equipmentCollection2.length) {
            return false;
        }

        for (let index = 0; index < equipmentCollection1.length; index++) {
            const equipment1 = equipmentCollection1[index];
            const equipment2 = equipmentCollection2[index];

            if (!this.equalsOne(equipment1, equipment2)) {
                return false;
            }
        }

        return true;
    }

    public equalsOne(equipment1: Equipment, equipment2: Equipment): boolean {
        if (equipment1.name === equipment2.name
            && equipment1.total === equipment2.total) {
                return true;
        }

        return false;
    }

}