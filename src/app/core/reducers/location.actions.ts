import {createAction, props} from '@ngrx/store';
import {LocationModel} from '../models/weather-conditions.model';
import {LocationState} from '../models/location-state.model';

export const initLocations = createAction(
    '[Location] Init locations'
);

export const setState = createAction(
    '[Location] Set state',
    props<LocationState>()
);

export const setLocations = createAction(
    '[Location] Set locations',
    props<{ zipcodes: string[] }>()
);

export const addLocation = createAction(
    '[Location] Add location',
    props<{ zipcode: string }>()
);

export const locationFetched = createAction(
    '[Location] Location fetched',
    props<{ location: LocationModel }>()
);

export const locationFetchingOver = createAction(
    '[Location] Location fetching over',
    props<{ zipcode: string }>()
);

export const updateLocation = createAction(
    '[Location] Update location',
    props<{ location: LocationModel }>()
);

export const removeLocation = createAction(
    '[Location] Remove location',
    props<{ zipcode: string }>()
);

export const refreshLocations = createAction(
    '[Location] Refresh locations'
);
