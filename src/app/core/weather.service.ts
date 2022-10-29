import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {HttpClient, HttpParams} from '@angular/common/http';
import {LocationModel, WeatherConditionsModel} from './models/weather-conditions.model';
import {ICON_BASE_URL} from '../shared/tokens/icon.token';
import {ForecastModel} from './models/forecast.model';

@Injectable({providedIn: 'root'})
export class WeatherService {

    private currentConditions: LocationModel[] = [];

    constructor(private http: HttpClient, @Inject(ICON_BASE_URL) private iconBaseUrl: string) {
    }

    getCurrentConditions(zipcode: string): Observable<WeatherConditionsModel> {
        // Here we make a request to get the current conditions data from the API.
        const params = (new HttpParams())
            .set('zip', zipcode)
            .set('units', 'imperial');

        return this.http.get<WeatherConditionsModel>('weather', {params});
    }

    removeCurrentConditions(zipcode: string) {
        for (const i in this.currentConditions) {
            if (this.currentConditions[i].zip === zipcode) {
                this.currentConditions.splice(+i, 1);
            }
        }
    }

    getForecast(zipcode: string): Observable<ForecastModel> {
        // Here we make a request to get the forecast data from the API.
        const params = (new HttpParams())
            .set('zip', zipcode)
            .set('units', 'imperial');
        return this.http.get<ForecastModel>('/forecast/daily', {params});
    }

    getWeatherIcon(id): string {
        let icon: string;
        if (id >= 200 && id <= 232) {
            icon = 'art_storm.png';
        } else if (id >= 501 && id <= 511) {
            icon = 'art_rain.png';
        } else if (id === 500 || (id >= 520 && id <= 531)) {
            icon = 'art_light_rain.png';
        } else if (id >= 600 && id <= 622) {
            icon = 'art_snow.png';
        } else if (id >= 801 && id <= 804) {
            icon = 'art_clouds.png';
        } else if (id === 741 || id === 761) {
            icon = 'art_fog.png';
        } else {
            icon = 'art_clear.png';
        }
        return `${this.iconBaseUrl}${icon}`;
    }

}
