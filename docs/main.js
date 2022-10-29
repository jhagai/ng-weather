"use strict";
(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 3088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 8405);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ 6738);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ 3769);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _shared_tokens_icon_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/tokens/icon.token */ 9808);
/* harmony import */ var _shared_tokens_open_weather_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/tokens/open-weather.token */ 387);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _core_interceptors_open_weather_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/interceptors/open-weather.interceptor */ 3732);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store-devtools */ 5242);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ 5405);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















let AppModule = class AppModule {
};
AppModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_1__.ForecastsListComponent
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__.CoreModule,
            _app_routing__WEBPACK_IMPORTED_MODULE_2__.routing,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.ServiceWorkerModule.register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_11__.StoreModule.forRoot({}, {}),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__.EffectsModule.forRoot([]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_13__.StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production }),
        ],
        providers: [
            { provide: _shared_tokens_open_weather_token__WEBPACK_IMPORTED_MODULE_5__.OPEN_WEATHER_MAP_BASE_URL, useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.openWeatherMap.baseUrl },
            { provide: _shared_tokens_open_weather_token__WEBPACK_IMPORTED_MODULE_5__.OPEN_WEATHER_MAP_APPID_KEY, useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.openWeatherMap.appIdKey },
            { provide: _shared_tokens_open_weather_token__WEBPACK_IMPORTED_MODULE_5__.OPEN_WEATHER_MAP_APPID_VALUE, useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.openWeatherMap.appIdValue },
            { provide: _shared_tokens_icon_token__WEBPACK_IMPORTED_MODULE_4__.ICON_BASE_URL, useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.iconUrl },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS, useClass: _core_interceptors_open_weather_interceptor__WEBPACK_IMPORTED_MODULE_7__.OpenWeatherInterceptor, multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 6738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routing": () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 8405);
/* harmony import */ var _core_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/main-page/main-page.component */ 5087);



const appRoutes = [
    {
        path: '', component: _core_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
    },
    {
        path: 'forecast/:zipcode', component: _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsListComponent
    }
];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });


/***/ }),

/***/ 7642:
/*!*******************************************************!*\
  !*** ./src/app/core/condition/condition.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConditionComponent": () => (/* binding */ ConditionComponent)
/* harmony export */ });
/* harmony import */ var _condition_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./condition.component.html?ngResource */ 7338);
/* harmony import */ var _condition_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./condition.component.css?ngResource */ 5259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ 1837);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ConditionComponent = class ConditionComponent {
    constructor(weatherService, router) {
        this.weatherService = weatherService;
        this.router = router;
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    ngOnInit() {
        if (!this.location) {
            console.error('Location input should not be empty');
        }
    }
    showForecast(eventTarget) {
        // Do not navigate to forecast route if the user clicked on close button.
        if (!this.closeEltRef.nativeElement.contains(eventTarget)) {
            this.router.navigate(['/forecast', this.location.zip]);
        }
    }
    removeLocation(zipCode) {
        this.remove.emit(zipCode);
    }
};
ConditionComponent.ctorParameters = () => [
    { type: _weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ConditionComponent.propDecorators = {
    location: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    remove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }],
    closeEltRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['closeRef', { static: true },] }],
    showForecast: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostListener, args: ['click', ['$event.target'],] }]
};
ConditionComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-condition',
        template: _condition_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_condition_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConditionComponent);



/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry/zipcode-entry.component */ 491);
/* harmony import */ var _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions/current-conditions.component */ 3685);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page/main-page.component */ 5087);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _condition_condition_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./condition/condition.component */ 7642);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _reducers_location_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/location.feature */ 8226);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _reducers_location_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/location.effects */ 7904);
/* harmony import */ var _shared_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/autocomplete/autocomplete.component */ 4822);
/* harmony import */ var _shared_submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/submit-button/submit-button.component */ 2774);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_0__.ZipcodeEntryComponent,
            _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_1__.CurrentConditionsComponent,
            _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__.MainPageComponent,
            _condition_condition_component__WEBPACK_IMPORTED_MODULE_3__.ConditionComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule,
            _shared_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_6__.AutocompleteComponent,
            _shared_submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_7__.SubmitButtonComponent,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.StoreModule.forFeature(_reducers_location_feature__WEBPACK_IMPORTED_MODULE_4__.locationsFeature),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.EffectsModule.forFeature([_reducers_location_effects__WEBPACK_IMPORTED_MODULE_5__.LocationEffects])
        ],
        exports: [
            _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__.MainPageComponent
        ]
    })
], CoreModule);



/***/ }),

/***/ 3685:
/*!*************************************************************************!*\
  !*** ./src/app/core/current-conditions/current-conditions.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentConditionsComponent": () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 1398);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 1562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let CurrentConditionsComponent = class CurrentConditionsComponent {
    constructor() {
        this.locationModels = [];
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    removeLocation(zipCode) {
        this.remove.emit(zipCode);
    }
};
CurrentConditionsComponent.ctorParameters = () => [];
CurrentConditionsComponent.propDecorators = {
    locationModels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    remove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
CurrentConditionsComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-current-conditions',
        template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CurrentConditionsComponent);



/***/ }),

/***/ 3732:
/*!***************************************************************!*\
  !*** ./src/app/core/interceptors/open-weather.interceptor.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OpenWeatherInterceptor": () => (/* binding */ OpenWeatherInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _shared_tokens_open_weather_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/tokens/open-weather.token */ 387);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let OpenWeatherInterceptor = class OpenWeatherInterceptor {
    constructor(baseUrl, appIdKey, appIdValue) {
        this.baseUrl = baseUrl;
        this.appIdKey = appIdKey;
        this.appIdValue = appIdValue;
    }
    intercept(request, next) {
        const params = (request.params ?? new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams())
            .set(this.appIdKey, this.appIdValue);
        const fullUrl = `${this.baseUrl}/${request.url}`;
        const reqWithToken = request.clone({ url: fullUrl, params });
        return next.handle(reqWithToken);
    }
};
OpenWeatherInterceptor.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_shared_tokens_open_weather_token__WEBPACK_IMPORTED_MODULE_0__.OPEN_WEATHER_MAP_BASE_URL,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_shared_tokens_open_weather_token__WEBPACK_IMPORTED_MODULE_0__.OPEN_WEATHER_MAP_APPID_KEY,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_shared_tokens_open_weather_token__WEBPACK_IMPORTED_MODULE_0__.OPEN_WEATHER_MAP_APPID_VALUE,] }] }
];
OpenWeatherInterceptor = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], OpenWeatherInterceptor);



/***/ }),

/***/ 3348:
/*!******************************************!*\
  !*** ./src/app/core/location.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOCATIONS": () => (/* binding */ LOCATIONS),
/* harmony export */   "LocationService": () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const LOCATIONS = 'locations';
let LocationService = class LocationService {
    extractFromLocalStorage() {
        const locString = localStorage.getItem(LOCATIONS);
        let locations = [];
        if (locString) {
            try {
                locations = JSON.parse(locString);
            }
            catch (e) {
                console.error(`An error ocurred while trying to unmarshal locations from local storage <${locString}>`, e);
            }
        }
        return locations;
    }
    persistInLocalStorage(locations) {
        localStorage.setItem(LOCATIONS, JSON.stringify(locations));
    }
};
LocationService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({ providedIn: 'root' })
], LocationService);



/***/ }),

/***/ 5087:
/*!*******************************************************!*\
  !*** ./src/app/core/main-page/main-page.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageComponent": () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 9693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _reducers_location_feature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/location.feature */ 8226);
/* harmony import */ var _reducers_location_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/location.actions */ 9705);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let MainPageComponent = class MainPageComponent {
    constructor(store) {
        this.store = store;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.locationState$ = this.store.select(_reducers_location_feature__WEBPACK_IMPORTED_MODULE_1__.locationsFeature.selectLocationsState);
    }
    ngOnInit() {
        // When the component loads, start the "reload" process.
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(30000).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(() => this.store.dispatch((0,_reducers_location_actions__WEBPACK_IMPORTED_MODULE_2__.refreshLocations)())), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$.asObservable())).subscribe();
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    removeLocation(zipcode) {
        this.store.dispatch((0,_reducers_location_actions__WEBPACK_IMPORTED_MODULE_2__.removeLocation)({ zipcode }));
    }
};
MainPageComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store }
];
MainPageComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-main-page',
        template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], MainPageComponent);



/***/ }),

/***/ 9963:
/*!************************************************!*\
  !*** ./src/app/core/models/countries.model.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COUNTRIES": () => (/* binding */ COUNTRIES)
/* harmony export */ });
const COUNTRIES = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'AndorrA', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Belize', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bermuda', code: 'BM' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Bouvet Island', code: 'BV' },
    { name: 'Brazil', code: 'BR' },
    { name: 'British Indian Ocean Territory', code: 'IO' },
    { name: 'Brunei Darussalam', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Canada', code: 'CA' },
    { name: 'Cape Verde', code: 'CV' },
    { name: 'Cayman Islands', code: 'KY' },
    { name: 'Central African Republic', code: 'CF' },
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN' },
    { name: 'Christmas Island', code: 'CX' },
    { name: 'Cocos (Keeling) Islands', code: 'CC' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Comoros', code: 'KM' },
    { name: 'Congo', code: 'CG' },
    { name: 'Congo, The Democratic Republic of the', code: 'CD' },
    { name: 'Cook Islands', code: 'CK' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Cote D\'Ivoire', code: 'CI' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Czech Republic', code: 'CZ' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egypt', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Falkland Islands (Malvinas)', code: 'FK' },
    { name: 'Faroe Islands', code: 'FO' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Finland', code: 'FI' },
    { name: 'France', code: 'FR' },
    { name: 'French Guiana', code: 'GF' },
    { name: 'French Polynesia', code: 'PF' },
    { name: 'French Southern Territories', code: 'TF' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Germany', code: 'DE' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Gibraltar', code: 'GI' },
    { name: 'Greece', code: 'GR' },
    { name: 'Greenland', code: 'GL' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Guadeloupe', code: 'GP' },
    { name: 'Guam', code: 'GU' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guernsey', code: 'GG' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
    { name: 'Holy See (Vatican City State)', code: 'VA' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran, Islamic Republic Of', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Isle of Man', code: 'IM' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japan', code: 'JP' },
    { name: 'Jersey', code: 'JE' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Kiribati', code: 'KI' },
    { name: 'Korea, Democratic People\'S Republic of', code: 'KP' },
    { name: 'Korea, Republic of', code: 'KR' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: 'Lao People\'S Democratic Republic', code: 'LA' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Lesotho', code: 'LS' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Libyan Arab Jamahiriya', code: 'LY' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'Macao', code: 'MO' },
    { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Mali', code: 'ML' },
    { name: 'Malta', code: 'MT' },
    { name: 'Marshall Islands', code: 'MH' },
    { name: 'Martinique', code: 'MQ' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'Mayotte', code: 'YT' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Micronesia, Federated States of', code: 'FM' },
    { name: 'Moldova, Republic of', code: 'MD' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Montserrat', code: 'MS' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Nauru', code: 'NR' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Netherlands Antilles', code: 'AN' },
    { name: 'New Caledonia', code: 'NC' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Niger', code: 'NE' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Niue', code: 'NU' },
    { name: 'Norfolk Island', code: 'NF' },
    { name: 'Northern Mariana Islands', code: 'MP' },
    { name: 'Norway', code: 'NO' },
    { name: 'Oman', code: 'OM' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Palau', code: 'PW' },
    { name: 'Palestinian Territory, Occupied', code: 'PS' },
    { name: 'Panama', code: 'PA' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Pitcairn', code: 'PN' },
    { name: 'Poland', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Puerto Rico', code: 'PR' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Reunion', code: 'RE' },
    { name: 'Romania', code: 'RO' },
    { name: 'Russian Federation', code: 'RU' },
    { name: 'RWANDA', code: 'RW' },
    { name: 'Saint Helena', code: 'SH' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Saint Pierre and Miquelon', code: 'PM' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC' },
    { name: 'Samoa', code: 'WS' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Sao Tome and Principe', code: 'ST' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Serbia and Montenegro', code: 'CS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Solomon Islands', code: 'SB' },
    { name: 'Somalia', code: 'SO' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
    { name: 'Spain', code: 'ES' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Sudan', code: 'SD' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Svalbard and Jan Mayen', code: 'SJ' },
    { name: 'Swaziland', code: 'SZ' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Syrian Arab Republic', code: 'SY' },
    { name: 'Taiwan, Province of China', code: 'TW' },
    { name: 'Tajikistan', code: 'TJ' },
    { name: 'Tanzania, United Republic of', code: 'TZ' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Timor-Leste', code: 'TL' },
    { name: 'Togo', code: 'TG' },
    { name: 'Tokelau', code: 'TK' },
    { name: 'Tonga', code: 'TO' },
    { name: 'Trinidad and Tobago', code: 'TT' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Turkmenistan', code: 'TM' },
    { name: 'Turks and Caicos Islands', code: 'TC' },
    { name: 'Tuvalu', code: 'TV' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States', code: 'US' },
    { name: 'United States Minor Outlying Islands', code: 'UM' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Vanuatu', code: 'VU' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Viet Nam', code: 'VN' },
    { name: 'Virgin Islands, British', code: 'VG' },
    { name: 'Virgin Islands, U.S.', code: 'VI' },
    { name: 'Wallis and Futuna', code: 'WF' },
    { name: 'Western Sahara', code: 'EH' },
    { name: 'Yemen', code: 'YE' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabwe', code: 'ZW' }
];


/***/ }),

/***/ 9705:
/*!***************************************************!*\
  !*** ./src/app/core/reducers/location.actions.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLocation": () => (/* binding */ addLocation),
/* harmony export */   "initLocations": () => (/* binding */ initLocations),
/* harmony export */   "locationFetched": () => (/* binding */ locationFetched),
/* harmony export */   "locationFetchingOver": () => (/* binding */ locationFetchingOver),
/* harmony export */   "refreshLocations": () => (/* binding */ refreshLocations),
/* harmony export */   "removeLocation": () => (/* binding */ removeLocation),
/* harmony export */   "setLocations": () => (/* binding */ setLocations),
/* harmony export */   "setState": () => (/* binding */ setState),
/* harmony export */   "updateLocation": () => (/* binding */ updateLocation)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const initLocations = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Location] Init locations');
const setState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Location] Set state', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const setLocations = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Location] Set locations', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const addLocation = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Location] Add location', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const locationFetched = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Location] Location fetched', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const locationFetchingOver = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Location] Location fetching over', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const updateLocation = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Location] Update location', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const removeLocation = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Location] Remove location', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const refreshLocations = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Location] Refresh locations');


/***/ }),

/***/ 7904:
/*!***************************************************!*\
  !*** ./src/app/core/reducers/location.effects.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationEffects": () => (/* binding */ LocationEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../weather.service */ 1837);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 522);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var _location_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location.actions */ 9705);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 6439);
/* harmony import */ var _location_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.feature */ 8226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../location.service */ 3348);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let LocationEffects = class LocationEffects {
    constructor(actions$, store, weatherService, locationService) {
        this.actions$ = actions$;
        this.store = store;
        this.weatherService = weatherService;
        this.locationService = locationService;
        // When initializing the feature:
        // 1) Load zipcodes from the localstorage and create ONE setLocations action
        // 2) For each zip code create a locationFetched action.
        this.initLocations$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_location_actions__WEBPACK_IMPORTED_MODULE_1__.initLocations.type), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(() => {
            const zipcodes = this.locationService.extractFromLocalStorage();
            // Action to rehydrate locations field
            const setZipcodes = (0,_location_actions__WEBPACK_IMPORTED_MODULE_1__.setLocations)({ zipcodes });
            // Action to rehydrate conditions field
            const fetchZipcodes = [...new Set(zipcodes)].map(zipcode => this.fetchCurrentConditions(zipcode));
            // Merge all actions
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(...[(0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(setZipcodes), ...fetchZipcodes]);
        })), { useEffectsErrorHandler: false });
        // When adding a location, save it to local storage before updating the state.
        this.addLocation$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_location_actions__WEBPACK_IMPORTED_MODULE_1__.addLocation.type), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.concatLatestFrom)(() => this.store.select(_location_feature__WEBPACK_IMPORTED_MODULE_2__.locationsFeature.selectLocations)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([{ zipcode }, locations]) => [...locations, zipcode]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(locations => this.locationService.persistInLocalStorage(locations)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(locations => (0,_location_actions__WEBPACK_IMPORTED_MODULE_1__.setLocations)({ zipcodes: locations }))), { useEffectsErrorHandler: false });
        // When removing a location, save it to local storage before updating the state.
        this.removeLocation$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_location_actions__WEBPACK_IMPORTED_MODULE_1__.removeLocation.type), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.concatLatestFrom)(() => this.store.select(_location_feature__WEBPACK_IMPORTED_MODULE_2__.locationsFeature.selectLocationsState)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([{ zipcode }, state]) => {
            return {
                ...state,
                locations: state.locations.filter(zip => zip !== zipcode),
                locationModels: state.locationModels.filter(locationModel => locationModel.zip !== zipcode),
            };
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.tap)(({ locations }) => this.locationService.persistInLocalStorage(locations)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(newState => (0,_location_actions__WEBPACK_IMPORTED_MODULE_1__.setState)(newState))), { useEffectsErrorHandler: false });
        // When receiving a refresh state instruction, fetch all
        this.refreshLocations$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_location_actions__WEBPACK_IMPORTED_MODULE_1__.refreshLocations.type), (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.concatLatestFrom)(() => this.store.select(_location_feature__WEBPACK_IMPORTED_MODULE_2__.locationsFeature.selectLocations)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(([_, locations]) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(...[...new Set(locations)].map(zipcode => this.weatherService.getCurrentConditions(zipcode)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(data => (0,_location_actions__WEBPACK_IMPORTED_MODULE_1__.updateLocation)({
            location: {
                zip: zipcode,
                data,
                imageUrl: this.weatherService.getWeatherIcon(data.weather[0].id)
            }
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(() => {
            console.error(`An error occurred while trying to load weather conditions for zipcode <${zipcode}>`);
            return rxjs__WEBPACK_IMPORTED_MODULE_12__.EMPTY;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_location_actions__WEBPACK_IMPORTED_MODULE_1__.removeLocation.type), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(({ zip }) => zip === zipcode)))))))), { useEffectsErrorHandler: false });
    }
    ngrxOnInitEffects() {
        return (0,_location_actions__WEBPACK_IMPORTED_MODULE_1__.initLocations)();
    }
    fetchCurrentConditions(zipcode) {
        return this.weatherService.getCurrentConditions(zipcode)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(data => (0,_location_actions__WEBPACK_IMPORTED_MODULE_1__.locationFetched)({
            location: {
                zip: zipcode,
                data,
                imageUrl: this.weatherService.getWeatherIcon(data.weather[0].id)
            }
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(() => {
            console.error(`An error occurred while trying to load weather conditions for zipcode <${zipcode}>`);
            return rxjs__WEBPACK_IMPORTED_MODULE_12__.EMPTY;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_location_actions__WEBPACK_IMPORTED_MODULE_1__.removeLocation.type), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(({ zip }) => zip === zipcode))));
    }
};
LocationEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_15__.Store },
    { type: _weather_service__WEBPACK_IMPORTED_MODULE_0__.WeatherService },
    { type: _location_service__WEBPACK_IMPORTED_MODULE_3__.LocationService }
];
LocationEffects = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Injectable)()
], LocationEffects);



/***/ }),

/***/ 8226:
/*!***************************************************!*\
  !*** ./src/app/core/reducers/location.feature.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locationsFeature": () => (/* binding */ locationsFeature)
/* harmony export */ });
/* harmony import */ var _location_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.reducer */ 3995);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);


const locationsFeature = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeature)({
    name: 'locations',
    reducer: _location_reducer__WEBPACK_IMPORTED_MODULE_0__.locationsReducer,
});


/***/ }),

/***/ 3995:
/*!***************************************************!*\
  !*** ./src/app/core/reducers/location.reducer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locationsReducer": () => (/* binding */ locationsReducer)
/* harmony export */ });
/* harmony import */ var _location_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.actions */ 9705);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);


const initialState = {
    locations: [],
    locationModels: []
};
const locationsReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_location_actions__WEBPACK_IMPORTED_MODULE_0__.setState, (_, newState) => {
    return newState;
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_location_actions__WEBPACK_IMPORTED_MODULE_0__.setLocations, (state, { zipcodes }) => {
    return { ...state, locations: zipcodes };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_location_actions__WEBPACK_IMPORTED_MODULE_0__.locationFetched, (state, { location }) => {
    return { ...state, locationModels: [...state.locationModels, location] };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_location_actions__WEBPACK_IMPORTED_MODULE_0__.updateLocation, (state, { location }) => {
    return {
        ...state,
        locationModels: state.locationModels.map(l => l.zip === location.zip ? location : l),
    };
}));


/***/ }),

/***/ 1837:
/*!*****************************************!*\
  !*** ./src/app/core/weather.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeatherService": () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _shared_tokens_icon_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/tokens/icon.token */ 9808);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let WeatherService = class WeatherService {
    constructor(http, iconBaseUrl) {
        this.http = http;
        this.iconBaseUrl = iconBaseUrl;
        this.currentConditions = [];
    }
    getCurrentConditions(zipcode) {
        // Here we make a request to get the current conditions data from the API.
        const params = (new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams())
            .set('zip', zipcode)
            .set('units', 'imperial');
        return this.http.get('weather', { params });
    }
    removeCurrentConditions(zipcode) {
        for (const i in this.currentConditions) {
            if (this.currentConditions[i].zip === zipcode) {
                this.currentConditions.splice(+i, 1);
            }
        }
    }
    getForecast(zipcode) {
        // Here we make a request to get the forecast data from the API.
        const params = (new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams())
            .set('zip', zipcode)
            .set('units', 'imperial');
        return this.http.get('/forecast/daily', { params });
    }
    getWeatherIcon(id) {
        let icon;
        if (id >= 200 && id <= 232) {
            icon = 'art_storm.png';
        }
        else if (id >= 501 && id <= 511) {
            icon = 'art_rain.png';
        }
        else if (id === 500 || (id >= 520 && id <= 531)) {
            icon = 'art_light_rain.png';
        }
        else if (id >= 600 && id <= 622) {
            icon = 'art_snow.png';
        }
        else if (id >= 801 && id <= 804) {
            icon = 'art_clouds.png';
        }
        else if (id === 741 || id === 761) {
            icon = 'art_fog.png';
        }
        else {
            icon = 'art_clear.png';
        }
        return `${this.iconBaseUrl}${icon}`;
    }
};
WeatherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_shared_tokens_icon_token__WEBPACK_IMPORTED_MODULE_0__.ICON_BASE_URL,] }] }
];
WeatherService = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], WeatherService);



/***/ }),

/***/ 491:
/*!***************************************************************!*\
  !*** ./src/app/core/zipcode-entry/zipcode-entry.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZipcodeEntryComponent": () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 1276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6439);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _models_countries_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/countries.model */ 9963);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weather.service */ 1837);
/* harmony import */ var _reducers_location_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/location.actions */ 9705);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









let ZipcodeEntryComponent = class ZipcodeEntryComponent {
    constructor(store, formBuilder, weatherService) {
        this.store = store;
        this.weatherService = weatherService;
        this.obs$ = rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
        this.countries = _models_countries_model__WEBPACK_IMPORTED_MODULE_1__.COUNTRIES;
        this.formGroup = formBuilder.group({
            zipcode: formBuilder.control(''),
            country: formBuilder.control(null)
        });
        this.obs$ = this.formGroup.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(this.formGroup.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(({ zipcode, country }) => {
            return new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable(obs => {
                const loc = [zipcode, country?.code].filter(c => !!c).join(',');
                obs.next(loc);
                obs.complete();
            }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(loc => this.store.dispatch((0,_reducers_location_actions__WEBPACK_IMPORTED_MODULE_3__.addLocation)({ zipcode: loc }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(loc => this.weatherService.getCurrentConditions(loc)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(data => (0,_reducers_location_actions__WEBPACK_IMPORTED_MODULE_3__.locationFetched)({
                location: {
                    zip: zipcode,
                    data,
                    imageUrl: this.weatherService.getWeatherIcon(data.weather[0].id)
                }
            })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(() => {
                console.error(`An error occurred while trying to load weather conditions for zipcode <${zipcode}>`);
                return rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(action => this.store.dispatch(action)))));
        }));
    }
};
ZipcodeEntryComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_11__.Store },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder },
    { type: _weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService }
];
ZipcodeEntryComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-zipcode-entry',
        template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
    })
], ZipcodeEntryComponent);



/***/ }),

/***/ 8405:
/*!************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForecastsListComponent": () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 4517);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 7309);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/weather.service */ 1837);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9095);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ForecastsListComponent = class ForecastsListComponent {
    constructor(weatherService, route) {
        this.weatherService = weatherService;
        this.forecast$ = route.params
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(({ zipcode }) => weatherService.getForecast(zipcode)));
    }
    computeWeatherIcon(id) {
        return this.weatherService.getWeatherIcon(id);
    }
};
ForecastsListComponent.ctorParameters = () => [
    { type: _core_weather_service__WEBPACK_IMPORTED_MODULE_2__.WeatherService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute }
];
ForecastsListComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-forecasts-list',
        template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForecastsListComponent);



/***/ }),

/***/ 4822:
/*!***************************************************************!*\
  !*** ./src/app/shared/autocomplete/autocomplete.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutocompleteComponent": () => (/* binding */ AutocompleteComponent)
/* harmony export */ });
/* harmony import */ var _autocomplete_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./autocomplete.component.html?ngResource */ 8146);
/* harmony import */ var _autocomplete_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autocomplete.component.css?ngResource */ 2145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6439);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _highlight_matching_text_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../highlight-matching-text.pipe */ 3307);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AutocompleteComponent_1;








let AutocompleteComponent = AutocompleteComponent_1 = class AutocompleteComponent {
    constructor(element) {
        this.element = element;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
        this.filteredOptions$ = rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
        this.selected = null;
        this.showDropdown = false;
    }
    click(target) {
        if (this.element.nativeElement.contains(target)) {
            if (this.inputEltRef.nativeElement.contains(target)) {
                this.showDropdown = true;
            }
        }
        else {
            this.showDropdown = false;
        }
    }
    set options(options) {
        this.filteredOptions$ = this.formControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(this.formControl.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(value => {
            if (this.selected && this.selected.name !== value) {
                this.selected = null;
                this.onChangeFn(null);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(value => {
            return options.filter(opt => opt.name.toUpperCase().indexOf(value.toUpperCase()) > -1);
        }));
    }
    writeValue(obj) {
        this.selected = obj;
        this.formControl.setValue(obj?.name ?? '');
    }
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
        // Not implemented
    }
    setDisabledState(isDisabled) {
        // Not implemented
    }
    selectOption(selected) {
        this.selected = selected;
        this.formControl.setValue(selected.name);
        this.onChangeFn(selected);
        this.showDropdown = false;
    }
    trackByCode(_, { code }) {
        return code;
    }
};
AutocompleteComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef }
];
AutocompleteComponent.propDecorators = {
    inputEltRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['inputRef', { static: true },] }],
    click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.HostListener, args: ['document:click', ['$event.target'],] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
AutocompleteComponent = AutocompleteComponent_1 = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-autocomplete',
        template: _autocomplete_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        standalone: true,
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _highlight_matching_text_pipe__WEBPACK_IMPORTED_MODULE_2__.HighlightMatchingTextPipe],
        providers: [
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR, multi: true, useExisting: AutocompleteComponent_1 }
        ],
        styles: [_autocomplete_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AutocompleteComponent);



/***/ }),

/***/ 3307:
/*!********************************************************!*\
  !*** ./src/app/shared/highlight-matching-text.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightMatchingTextPipe": () => (/* binding */ HighlightMatchingTextPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


function highlight(match) {
    return match.length > 0 ? `<b>${match}</b>` : match;
}
let HighlightMatchingTextPipe = class HighlightMatchingTextPipe {
    constructor(sanitize) {
        this.sanitize = sanitize;
    }
    transform(value, match) {
        const html = value.replace(new RegExp(match, 'gi'), highlight);
        return this.sanitize.bypassSecurityTrustHtml(html);
    }
};
HighlightMatchingTextPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.DomSanitizer }
];
HighlightMatchingTextPipe = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'highlightMatchingText',
        standalone: true
    })
], HighlightMatchingTextPipe);



/***/ }),

/***/ 2774:
/*!*****************************************************************!*\
  !*** ./src/app/shared/submit-button/submit-button.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitButtonComponent": () => (/* binding */ SubmitButtonComponent)
/* harmony export */ });
/* harmony import */ var _submit_button_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submit-button.component.html?ngResource */ 4140);
/* harmony import */ var _submit_button_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit-button.component.css?ngResource */ 7826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6439);
/* harmony import */ var _utils_button_status_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/button-status.util */ 1645);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let SubmitButtonComponent = class SubmitButtonComponent {
    constructor() {
        this.submit$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.buttonStatus$ = rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
    }
    get readyTplEltRef() {
        return this._readyTplEltRef;
    }
    set readyTplEltRef(value) {
        this._readyTplEltRef = value;
    }
    get doneTplEltRef() {
        return this._doneTplEltRef;
    }
    set doneTplEltRef(value) {
        this._doneTplEltRef = value;
    }
    get pendingTplEltRef() {
        return this._pendingTplEltRef;
    }
    set pendingTplEltRef(value) {
        this._pendingTplEltRef = value;
    }
    set source(source$) {
        this.buttonStatus$ = this.submit$.asObservable().pipe((0,_utils_button_status_util__WEBPACK_IMPORTED_MODULE_2__.toButtonStatus)(source$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(buttonStatus => {
            switch (buttonStatus) {
                case "PENDING" /* PENDING */:
                    return this.pendingTplEltRef;
                case "DONE" /* DONE */:
                    return this.doneTplEltRef;
                default:
                    return this.readyTplEltRef;
            }
        }));
    }
    click() {
        this.submit$.next();
    }
    ngOnInit() {
        if (!this.readyTplEltRef) {
            this.readyTplEltRef = this.defaultReadyEltRef;
        }
        if (!this.doneTplEltRef) {
            this.doneTplEltRef = this.defaultDoneEltRef;
        }
        if (!this.pendingTplEltRef) {
            this.pendingTplEltRef = this.defaultPendingEltRef;
        }
    }
};
SubmitButtonComponent.propDecorators = {
    defaultReadyEltRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['defaultReadyRef', { static: true },] }],
    defaultDoneEltRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['defaultDoneRef', { static: true },] }],
    defaultPendingEltRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['defaultPendingRef', { static: true },] }],
    readyTplEltRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    doneTplEltRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    pendingTplEltRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    source: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.HostListener, args: ['click',] }]
};
SubmitButtonComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-submit-button',
        template: _submit_button_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        standalone: true,
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule],
        styles: [_submit_button_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SubmitButtonComponent);



/***/ }),

/***/ 9808:
/*!*********************************************!*\
  !*** ./src/app/shared/tokens/icon.token.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ICON_BASE_URL": () => (/* binding */ ICON_BASE_URL)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const ICON_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('ICON_BASE_URL');


/***/ }),

/***/ 387:
/*!*****************************************************!*\
  !*** ./src/app/shared/tokens/open-weather.token.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OPEN_WEATHER_MAP_APPID_KEY": () => (/* binding */ OPEN_WEATHER_MAP_APPID_KEY),
/* harmony export */   "OPEN_WEATHER_MAP_APPID_VALUE": () => (/* binding */ OPEN_WEATHER_MAP_APPID_VALUE),
/* harmony export */   "OPEN_WEATHER_MAP_BASE_URL": () => (/* binding */ OPEN_WEATHER_MAP_BASE_URL)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const OPEN_WEATHER_MAP_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('OPEN_WEATHER_MAP_BASE_URL');
const OPEN_WEATHER_MAP_APPID_KEY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('OPEN_WEATHER_MAP_APPID_KEY');
const OPEN_WEATHER_MAP_APPID_VALUE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('OPEN_WEATHER_MAP_APPID_VALUE');


/***/ }),

/***/ 1645:
/*!****************************************************!*\
  !*** ./src/app/shared/utils/button-status.util.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toButtonStatus": () => (/* binding */ toButtonStatus)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 7760);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9361);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9701);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5398);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8623);


function toButtonStatus(input$) {
    return source$ => source$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.switchMap)(() => input$.pipe(
    // Pick last value just to make sure we wait for source completion.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeLast)(1), 
    // Returning null is intentional to pass through switchMap.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.switchMap)(() => {
        const done$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)("DONE" /* DONE */);
        const pending$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.timer)(500).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mapTo)("READY" /* READY */));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(done$, pending$);
    }), 
    // If no value is sent, just return READY
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.defaultIfEmpty)("READY" /* READY */), 
    // First value sent is READY
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)("PENDING" /* PENDING */))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.startWith)("READY" /* READY */));
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    openWeatherMap: {
        baseUrl: 'https://api.openweathermap.org/data/2.5',
        appIdKey: 'APPID',
        appIdValue: '5a4b2d457ecbef9eb2a71e480b947604',
    },
    iconUrl: 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/'
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);


/***/ }),

/***/ 3088:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 5259:
/*!*******************************************************************!*\
  !*** ./src/app/core/condition/condition.component.css?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = ".close {\n    cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmRpdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJjb25kaXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */";

/***/ }),

/***/ 1562:
/*!*************************************************************************************!*\
  !*** ./src/app/core/current-conditions/current-conditions.component.css?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = ".flex {\n  display: flex;\n  justify-content: space-between;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJlbnQtY29uZGl0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJjdXJyZW50LWNvbmRpdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuIl19 */";

/***/ }),

/***/ 7309:
/*!************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".icon {\n  width: 45px;\n  height: 45px;\n  position: absolute;\n  right: 20px;\n  top: -2px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmVjYXN0cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztBQUNYIiwiZmlsZSI6ImZvcmVjYXN0cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogLTJweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 2145:
/*!***************************************************************************!*\
  !*** ./src/app/shared/autocomplete/autocomplete.component.css?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRvY29tcGxldGUuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 7826:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/submit-button/submit-button.component.css?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJtaXQtYnV0dG9uLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>\n";

/***/ }),

/***/ 7338:
/*!********************************************************************!*\
  !*** ./src/app/core/condition/condition.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<div>\n    <h3>{{location.data.name}} ({{location.zip}})</h3>\n    <h4>Current conditions: {{location.data.weather[0].main}}</h4>\n    <h4>Temperatures today:</h4>\n    <p>\n        Current {{location.data.main.temp | number:'.0-0'}}\n        - Max {{location.data.main.temp_max | number:'.0-0'}}\n        - Min {{location.data.main.temp_min | number:'.0-0'}}\n    </p>\n    <p>\n        <a [routerLink]=\"['/forecast', location.zip]\">Show 5-day forecast for {{location.data.name}}</a>\n    </p>\n</div>\n<div>\n    <span class=\"close\" (click)=\"removeLocation(location.zip)\" #closeRef>&times;</span>\n    <img [src]=\"location.imageUrl\" alt=\"TODO add alt\">\n</div>\n\n\n";

/***/ }),

/***/ 1398:
/*!**************************************************************************************!*\
  !*** ./src/app/core/current-conditions/current-conditions.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<div>\n    <app-condition *ngFor=\"let location  of locationModels\"\n                   [location]=\"location\"\n                   (remove)=\"removeLocation($event)\"\n                   class=\"well flex\">\n    </app-condition>\n</div>\n";

/***/ }),

/***/ 9693:
/*!********************************************************************!*\
  !*** ./src/app/core/main-page/main-page.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container-fluid\">\n    <app-zipcode-entry></app-zipcode-entry>\n    <app-current-conditions (remove)=\"removeLocation($event)\" [locationModels]=\"locationState.locationModels\"\n                            *ngIf=\"locationState$ | async as locationState\"></app-current-conditions>\n</div>\n";

/***/ }),

/***/ 1276:
/*!****************************************************************************!*\
  !*** ./src/app/core/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<form class=\"well\" [formGroup]=\"formGroup\">\n    <h2>Enter a zipcode:</h2>\n    <input type=\"text\" placeholder=\"Zipcode\" formControlName=\"zipcode\" class=\"form-control\">\n    <br>\n    <h2>Enter a country:</h2>\n    <app-autocomplete [options]=\"countries\" formControlName=\"country\"></app-autocomplete>\n    <br/>\n    <app-submit-button [source]=\"obs$ | async\" [doneTplEltRef]=\"DONE\" [readyTplEltRef]=\"READY\"\n                       [pendingTplEltRef]=\"PENDING\"></app-submit-button>\n\n</form>\n\n<ng-template #DONE>\n    <button class=\"btn btn-success\"><span class=\"glyphicon glyphicon-ok\"></span> Done</button>\n</ng-template>\n\n<ng-template #READY>\n    <button class=\"btn btn-primary\">Add location</button>\n</ng-template>\n\n<ng-template #PENDING>\n    <button class=\"btn btn-danger\">Adding...</button>\n</ng-template>\n";

/***/ }),

/***/ 4517:
/*!*************************************************************************!*\
  !*** ./src/app/forecasts-list/forecasts-list.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<div *ngIf=\"forecast$ | async as forecast\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">5-day forecast for {{forecast.city.name}}</h3>\n\n    </div>\n    <ul class=\"list-group\">\n      <li *ngFor=\"let dailyForecast of forecast.list\" class=\"list-group-item\">\n        {{ (dailyForecast.dt * 1000) | date:'EEEE, MMM d'}}:\n        {{dailyForecast.weather[0].main}}\n        - Min: {{dailyForecast.temp.min | number:'.0-0'}}\n        - Max: {{dailyForecast.temp.max | number:'.0-0'}}\n\n        <img [src]=\"computeWeatherIcon(dailyForecast.weather[0].id)\" class=\"icon\" alt=\"Todo add alt\">\n      </li>\n    </ul>\n  </div>\n</div>\n<button class=\"btn btn-success\" [routerLink]=\"'/'\" >< Back to main page</button>\n";

/***/ }),

/***/ 8146:
/*!****************************************************************************!*\
  !*** ./src/app/shared/autocomplete/autocomplete.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"form-group has-feedback dropdown\">\n    <input type=\"text\" class=\"form-control\" [formControl]=\"formControl\" #inputRef (focusin)=\"showDropdown = true\">\n    <span class=\"form-control-feedback\" aria-hidden=\"true\">{{ selected?.code }}</span>\n    <ng-container *ngIf=\"filteredOptions$ | async as filteredOptions\">\n        <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\" [ngClass]=\"{show: filteredOptions.length && showDropdown}\">\n            <li *ngFor=\"let option of filteredOptions$ | async; trackBy: trackByCode\">\n                <a href=\"#\"\n                   (click)=\"selectOption(option)\"\n                   [innerHTML]=\"option.name | highlightMatchingText: formControl.value\">\n                </a>\n            </li>\n        </ul>\n    </ng-container>\n</div>\n";

/***/ }),

/***/ 4140:
/*!******************************************************************************!*\
  !*** ./src/app/shared/submit-button/submit-button.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ng-container *ngTemplateOutlet=\"buttonStatus$ | async\">\n</ng-container>\n\n<ng-template #defaultReadyRef>\n    <button class=\"btn btn-primary\">READY</button>\n</ng-template>\n\n<ng-template #defaultDoneRef>\n    <button class=\"btn btn-success\">DONE</button>\n</ng-template>\n\n<ng-template #defaultPendingRef>\n    <button class=\"btn btn-danger\">PENDING</button>\n</ng-template>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map