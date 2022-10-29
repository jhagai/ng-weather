import {Component} from '@angular/core';
import {EMPTY, Observable} from 'rxjs';
import {catchError, map, startWith, switchMap, tap} from 'rxjs/operators';
import {AutocompleteOption, COUNTRIES} from '../models/countries.model';
import {Store} from '@ngrx/store';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {WeatherService} from '../weather.service';
import {addLocation, locationFetched} from '../reducers/location.actions';

@Component({
    selector: 'app-zipcode-entry',
    templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {

    obs$: Observable<Observable<unknown>> = EMPTY;

    countries = COUNTRIES;

    formGroup: FormGroup<{ zipcode: FormControl<string | null>; country: FormControl<AutocompleteOption | null> }>;

    constructor(private store: Store, formBuilder: FormBuilder, private weatherService: WeatherService) {
        this.formGroup = formBuilder.group(
            {
                zipcode: formBuilder.control<string>(''),
                country: formBuilder.control<AutocompleteOption>(null)
            }
        );

        this.obs$ = this.formGroup.valueChanges.pipe(
            startWith(this.formGroup.value),
            map(
                ({zipcode, country}) => {
                    return new Observable<string>(obs => {
                        const loc = [zipcode, country?.code].filter(c => !!c).join(',');
                        obs.next(loc);
                        obs.complete();
                    }).pipe(
                        tap(loc => this.store.dispatch(addLocation({zipcode: loc}))),
                        switchMap(
                            loc => this.weatherService.getCurrentConditions(loc)
                                .pipe(
                                    map(data => locationFetched({
                                        location: {
                                            zip: zipcode,
                                            data,
                                            imageUrl: this.weatherService.getWeatherIcon(data.weather[0].id)
                                        }
                                    })),
                                    catchError(() => {
                                        console.error(`An error occurred while trying to load weather conditions for zipcode <${zipcode}>`);
                                        return EMPTY
                                    }),
                                    tap(action => this.store.dispatch(action))
                                )
                        )
                    );
                }
            )
        );
    }
}
