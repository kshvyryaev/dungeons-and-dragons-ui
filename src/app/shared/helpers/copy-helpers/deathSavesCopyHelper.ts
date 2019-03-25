import { Injectable } from '@angular/core';
import { DeathSaves } from '../../entities/deathSaves';

@Injectable({
    providedIn: 'root'
})
export class DeathSavesCopyHelper {

    public copyOne(deathSaves: DeathSaves): DeathSaves {
        const deathSavesCopy = new DeathSaves();
        deathSavesCopy.successes = deathSaves.successes;
        deathSavesCopy.failures = deathSaves.failures;

        return deathSavesCopy;
    }

}