import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class AttackFormFactory {

    public getInstance(): FormGroup {
        const instance = new FormGroup({
            name: new FormControl('', [ Validators.required ]),
            bonus: new FormControl('', [ Validators.required ]),
            damage: new FormControl('', [ Validators.required ]),
            type: new FormControl('', [ Validators.required ])
        });

        return instance;
    }

}