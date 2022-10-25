import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ForecastsListComponent} from './forecasts-list/forecasts-list.component';
import {routing} from './app.routing';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {ICON_BASE_URL} from './shared/tokens/icon.token';
import {OPEN_WEATHER_MAP_APPID_KEY, OPEN_WEATHER_MAP_APPID_VALUE, OPEN_WEATHER_MAP_BASE_URL} from './shared/tokens/open-weather.token';
import {CoreModule} from './core/core.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {OpenWeatherInterceptor} from './core/interceptors/open-weather.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        ForecastsListComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        routing,
        ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    ],
    providers: [
        {provide: OPEN_WEATHER_MAP_BASE_URL, useValue: environment.openWeatherMap.baseUrl},
        {provide: OPEN_WEATHER_MAP_APPID_KEY, useValue: environment.openWeatherMap.appIdKey},
        {provide: OPEN_WEATHER_MAP_APPID_VALUE, useValue: environment.openWeatherMap.appIdValue},
        {provide: ICON_BASE_URL, useValue: environment.iconUrl},
        {provide: HTTP_INTERCEPTORS, useClass: OpenWeatherInterceptor, multi: true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
