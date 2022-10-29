import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LocationModel} from '../models/weather-conditions.model';

@Component({
    selector: 'app-current-conditions',
    templateUrl: './current-conditions.component.html',
    styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

    @Input()
    locationModels: LocationModel[] = [];

    @Output()
    remove = new EventEmitter<string>();

    constructor() {
    }

    removeLocation(zipCode: string): void {
        this.remove.emit(zipCode);
    }
}
