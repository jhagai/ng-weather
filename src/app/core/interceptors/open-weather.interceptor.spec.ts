import { TestBed } from '@angular/core/testing';

import { OpenWeatherInterceptor } from './open-weather.interceptor';
import {HttpHandler, HttpParams, HttpRequest} from '@angular/common/http';
import createSpyObj = jasmine.createSpyObj;
import {OPEN_WEATHER_MAP_APPID_KEY, OPEN_WEATHER_MAP_APPID_VALUE, OPEN_WEATHER_MAP_BASE_URL} from '../../shared/tokens/open-weather.token';

describe('OpenWeatherInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      OpenWeatherInterceptor,
      {provide: OPEN_WEATHER_MAP_BASE_URL, useValue: 'http://baseURL'},
      {provide: OPEN_WEATHER_MAP_APPID_VALUE, useValue: 'AppIdValue'},
      {provide: OPEN_WEATHER_MAP_APPID_KEY, useValue: 'AppidKey'}
      ]
  }));

  it('should be created', () => {
    const interceptor: OpenWeatherInterceptor = TestBed.inject(OpenWeatherInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should update url and add token', () => {
    // GIVEN
    const interceptor: OpenWeatherInterceptor = TestBed.inject(OpenWeatherInterceptor);
    const req = new HttpRequest('GET', 'path');
    const httpHandlerSpy = createSpyObj<HttpHandler>(['handle']);
    // WHEN
    interceptor.intercept(req, httpHandlerSpy);
    // THEN
    const expectedReq = new HttpRequest('GET', 'http://baseURL/path', {params: (new HttpParams()).set('AppidKey', 'AppIdValue')});
    expect(httpHandlerSpy.handle).toHaveBeenCalledWith(expectedReq);
  });

  it('should preserve existing request params', () => {
    // GIVEN
    const interceptor: OpenWeatherInterceptor = TestBed.inject(OpenWeatherInterceptor);
    const req = new HttpRequest('GET', 'path', {params: (new HttpParams()).set('whateverKey', 'whateverValue')});
    const httpHandlerSpy = createSpyObj<HttpHandler>(['handle']);
    // WHEN
    interceptor.intercept(req, httpHandlerSpy);
    // THEN
    const expectedReq = new HttpRequest('GET', 'http://baseURL/path', {params: (new HttpParams()).set('whateverKey', 'whateverValue').set('AppidKey', 'AppIdValue')});
    expect(httpHandlerSpy.handle).toHaveBeenCalledWith(expectedReq);
  });
});
