import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CollectionEqualsHelper<T> {

    public equalsMany(collection1: T[], collection2: T[]): boolean {
        if (collection1.length !== collection2.length) {
            return false;
        }

        for (let index = 0; index < collection1.length; index++) {
            const element1 = collection1[index];
            const element2 = collection2[index];

            if (element1 !== element2) {
                return false;
            }
        }

        return true;
    }

}