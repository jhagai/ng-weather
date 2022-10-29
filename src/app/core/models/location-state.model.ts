import {LocationModel} from './weather-conditions.model';

export interface LocationState {
    locations: string[];
    locationModels: LocationModel[];
}
