import {LocationState} from '../models/location-state.model';
import {locationFetched, setLocations, setState, updateLocation} from './location.actions';
import {createReducer, on} from '@ngrx/store';
import {LocationModel} from '../models/weather-conditions.model';

const initialState: LocationState = {
    locations: [] as string[],
    locationModels: [] as LocationModel[]
}

export const locationsReducer = createReducer(
    initialState,
    on(setState, (_, newState) => {
        return newState;
    }),
    on(setLocations, (state, {zipcodes}) => {
        return {...state, locations: zipcodes};
    }),
    on(locationFetched, (state, {location}) => {
        return {...state, locationModels: [...state.locationModels, location]};
    }),
    on(updateLocation, (state, {location}) => {
        return {
            ...state,
            locationModels: state.locationModels.map(
                l => l.zip === location.zip ? location : l
            ),
        };
    })
);
