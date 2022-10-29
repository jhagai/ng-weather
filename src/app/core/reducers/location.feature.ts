import {locationsReducer} from './location.reducer';
import {createFeature} from '@ngrx/store';

export const locationsFeature = createFeature({
    name: 'locations',
    reducer: locationsReducer,
});
