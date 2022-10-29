import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Observable, Subject} from 'rxjs';
import {LocationModel} from '../models/weather-conditions.model';
import {takeUntil, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {locationsFeature} from '../reducers/location.feature';
import {refreshLocations, removeLocation} from '../reducers/location.actions';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit, OnDestroy {

    locationState$: Observable<{ locations: string[]; locationModels: LocationModel[] }>;
    private destroy$ = new Subject<void>();

    constructor(private store: Store) {
        this.locationState$ = this.store.select(locationsFeature.selectLocationsState);
    }

    ngOnInit(): void {
        // When the component loads, start the "reload" process.
        interval(30000).pipe(
            tap(() => this.store.dispatch(refreshLocations())),
            takeUntil(this.destroy$.asObservable())
        ).subscribe();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
    }

    removeLocation(zipcode: string) {
        this.store.dispatch(removeLocation({zipcode}));
    }
}
