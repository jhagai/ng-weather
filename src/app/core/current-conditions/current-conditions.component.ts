import {Component} from '@angular/core';
import {WeatherService} from '../weather.service';
import {LocationService} from '../location.service';
import {Router} from '@angular/router';
import {LocationModel} from '../models/weather-conditions.model';

@Component({
    selector: 'app-current-conditions',
    templateUrl: './current-conditions.component.html',
    styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

    constructor(private weatherService: WeatherService, private locationService: LocationService, private router: Router) {
    }

    getCurrentConditions(): LocationModel[] {
        return this.weatherService.getCurrentConditions();
    }

    showForecast(zipcode: string): void {
        this.router.navigate(['/forecast', zipcode])
    }

    computeWeatherIcon(id: number): string {
        return this.weatherService.getWeatherIcon(id);
    }

    removeLocation(zipCode: string): void {
        this.locationService.removeLocation(zipCode);
    }
}
