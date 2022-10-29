import {Injectable} from '@angular/core';

export const LOCATIONS = 'locations';

@Injectable({providedIn: 'root'})
export class LocationService {

    extractFromLocalStorage(): string[] {
        const locString = localStorage.getItem(LOCATIONS);
        let locations = [];
        if (locString) {
            try {
                locations = JSON.parse(locString);
            } catch (e) {
                console.error(`An error ocurred while trying to unmarshal locations from local storage <${locString}>`, e);
            }
        }
        return locations;
    }

    persistInLocalStorage(locations: string[]) {
        localStorage.setItem(LOCATIONS, JSON.stringify(locations));
    }

}
