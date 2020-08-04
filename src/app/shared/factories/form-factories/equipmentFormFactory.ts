import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class EquipmentFormFactory {

    public getInstance(): FormGroup {
        const instance = new FormGroup({
            name: new FormControl('', [ Validators.required ]),
            total: new FormControl('', [ Validators.required ])
        });

        return instance;
    }

}