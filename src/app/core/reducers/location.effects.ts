import {Actions, concatLatestFrom, createEffect, ofType, OnInitEffects} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {WeatherService} from '../weather.service';
import {catchError, filter, map, mergeMap, switchMap, takeUntil, tap} from 'rxjs/operators';
import {
    addLocation,
    initLocations,
    locationFetched,
    refreshLocations,
    removeLocation,
    setLocations,
    setState,
    updateLocation
} from './location.actions';
import {EMPTY, merge, of} from 'rxjs';
import {locationsFeature} from './location.feature';
import {Injectable} from '@angular/core';
import {LocationService} from '../location.service';

@Injectable()
export class LocationEffects implements OnInitEffects {

    // When initializing the feature:
    // 1) Load zipcodes from the localstorage and create ONE setLocations action
    // 2) For each zip code create a locationFetched action.
    initLocations$ = createEffect(() =>
            this.actions$.pipe(
                ofType(initLocations.type),
                mergeMap(
                    () => {
                        const zipcodes = this.locationService.extractFromLocalStorage();
                        // Action to rehydrate locations field
                        const setZipcodes = setLocations({zipcodes});
                        // Action to rehydrate conditions field
                        const fetchZipcodes = [...new Set(zipcodes)].map(
                            zipcode => this.fetchCurrentConditions(zipcode)
                        );
                        // Merge all actions
                        return merge(...[of(setZipcodes), ...fetchZipcodes]);
                    }
                )
            ),
        {useEffectsErrorHandler: false}
    );

    // When adding a location, save it to local storage before updating the state.
    addLocation$ = createEffect(() =>
            this.actions$.pipe(
                ofType(addLocation.type),
                concatLatestFrom(() => this.store.select(locationsFeature.selectLocations)),
                map(
                    ([{zipcode}, locations]) => [...locations, zipcode]
                ),
                tap(locations => this.locationService.persistInLocalStorage(locations)),
                map(
                    locations => setLocations({zipcodes: locations})
                ),
            ),
        {useEffectsErrorHandler: false}
    );

    // When removing a location, save it to local storage before updating the state.
    removeLocation$ = createEffect(() =>
            this.actions$.pipe(
                ofType(removeLocation.type),
                concatLatestFrom(() => this.store.select(locationsFeature.selectLocationsState)),
                map(
                    ([{zipcode}, state]) => {
                        return {
                            ...state,
                            locations: state.locations.filter(zip => zip !== zipcode),
                            locationModels: state.locationModels.filter(locationModel => locationModel.zip !== zipcode),
                        };
                    }
                ),
                tap(({locations}) => this.locationService.persistInLocalStorage(locations)),
                map(newState => setState(newState))
            ),
        {useEffectsErrorHandler: false}
    );

    // When receiving a refresh state instruction, fetch all
    refreshLocations$ = createEffect(() =>
            this.actions$.pipe(
                ofType(refreshLocations.type),
                concatLatestFrom(() => this.store.select(locationsFeature.selectLocations)),
                switchMap(([_, locations]) => merge(...[...new Set(locations)].map(
                            zipcode => this.weatherService.getCurrentConditions(zipcode)
                                .pipe(
                                    map(data => updateLocation({
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
                                    takeUntil(
                                        this.actions$.pipe(
                                            ofType(removeLocation.type),
                                            filter(({zip}) => zip === zipcode)
                                        )
                                    )
                                )
                        )
                    )
                )
            ),
        {useEffectsErrorHandler: false}
    );

    constructor(
        private actions$: Actions,
        private store: Store,
        private weatherService: WeatherService,
        private locationService: LocationService,
    ) {
    }

    ngrxOnInitEffects(): Action {
        return initLocations();
    }

    private fetchCurrentConditions(zipcode: string) {
        return this.weatherService.getCurrentConditions(zipcode)
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
                takeUntil(
                    this.actions$.pipe(
                        ofType(removeLocation.type),
                        filter(({zip}) => zip === zipcode)
                    )
                )
            );
    }
}
