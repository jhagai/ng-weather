import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ZipcodeEntryComponent} from './zipcode-entry/zipcode-entry.component';
import {CurrentConditionsComponent} from './current-conditions/current-conditions.component';
import {MainPageComponent} from './main-page/main-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ConditionComponent} from './condition/condition.component';
import {StoreModule} from '@ngrx/store';
import {locationsFeature} from './reducers/location.feature';
import {EffectsModule} from '@ngrx/effects';
import {LocationEffects} from './reducers/location.effects';
import {AutocompleteComponent} from '../shared/autocomplete/autocomplete.component';
import {SubmitButtonComponent} from '../shared/submit-button/submit-button.component';

@NgModule({
    declarations: [
        ZipcodeEntryComponent,
        CurrentConditionsComponent,
        MainPageComponent,
        ConditionComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule,
        AutocompleteComponent,
        SubmitButtonComponent,
        StoreModule.forFeature(locationsFeature),
        EffectsModule.forFeature([LocationEffects])
    ],
    exports: [
        MainPageComponent
    ]
})
export class CoreModule {
}
