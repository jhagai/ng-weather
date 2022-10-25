import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ZipcodeEntryComponent} from './zipcode-entry/zipcode-entry.component';
import {CurrentConditionsComponent} from './current-conditions/current-conditions.component';
import {MainPageComponent} from './main-page/main-page.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        ZipcodeEntryComponent,
        CurrentConditionsComponent,
        MainPageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
    ],
    exports: [
        MainPageComponent
    ]
})
export class CoreModule {
}
