import {Component} from '@angular/core';
import {WeatherService} from '../core/weather.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {ForecastModel} from '../core/models/forecast.model';
import {switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-forecasts-list',
    templateUrl: './forecasts-list.component.html',
    styleUrls: ['./forecasts-list.component.css']
})
export class ForecastsListComponent {

    forecast$: Observable<ForecastModel>;

    constructor(private weatherService: WeatherService, route: ActivatedRoute) {
        this.forecast$ = route.params
            .pipe(
                switchMap(
                    ({zipcode}) => weatherService.getForecast(zipcode)
                )
            );
    }

    computeWeatherIcon(id: number): string {
        return this.weatherService.getWeatherIcon(id);
    }
}
