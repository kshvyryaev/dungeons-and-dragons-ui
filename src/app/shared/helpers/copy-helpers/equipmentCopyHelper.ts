import { Injectable } from '@angular/core';
import { Equipment } from '../../entities/equipment';

@Injectable({
    providedIn: 'root'
})
export class EquipmentCopyHelper {

    public copyMany(equipmentCollection: Equipment[]): Equipment[] {
        const equipmentCollectionCopy: Equipment[] = [];

        equipmentCollection.forEach(equipment => {
            const equipmentCopy = this.copyOne(equipment);
            equipmentCollectionCopy.push(equipmentCopy);
        });

        return equipmentCollectionCopy;
    }

    public copyOne(equipment: Equipment): Equipment {
        const equipmentCopy = new  Equipment();
        equipmentCopy.name = equipment.name;
        equipmentCopy.total = equipment.total;

        return equipmentCopy;
    }

}