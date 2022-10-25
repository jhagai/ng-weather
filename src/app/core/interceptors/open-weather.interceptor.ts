import {Inject, Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {OPEN_WEATHER_MAP_APPID_KEY, OPEN_WEATHER_MAP_APPID_VALUE, OPEN_WEATHER_MAP_BASE_URL} from '../../shared/tokens/open-weather.token';

@Injectable()
export class OpenWeatherInterceptor implements HttpInterceptor {

  constructor(
      @Inject(OPEN_WEATHER_MAP_BASE_URL) private baseUrl: string,
      @Inject(OPEN_WEATHER_MAP_APPID_KEY) private appIdKey: string,
      @Inject(OPEN_WEATHER_MAP_APPID_VALUE) private appIdValue: string
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const params = (request.params ?? new HttpParams())
        .set(this.appIdKey, this.appIdValue);
    const fullUrl = `${this.baseUrl}/${request.url}`;
    const reqWithToken = request.clone({url: fullUrl, params});
    return next.handle(reqWithToken);
  }
}
