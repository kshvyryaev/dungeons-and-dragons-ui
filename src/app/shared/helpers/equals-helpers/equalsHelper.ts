import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EqualsHelper {

    public isNonRequiredStringsEqual(str1: string, str2: string): boolean {
        if ((str1 === undefined && str2 === "")
            || (str2 === undefined && str1 === "")
            || str1 === str2) {
                return true;
        }

        return false;
    }

}