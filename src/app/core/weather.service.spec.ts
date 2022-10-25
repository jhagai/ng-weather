import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {WeatherService} from './weather.service';
import {ICON_BASE_URL} from '../shared/tokens/icon.token';


describe('WeatherService', () => {
    let service: WeatherService;
    const iconBaseUrl = 'http://iconBaseURL/';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                WeatherService,
                {provide: ICON_BASE_URL, useValue: iconBaseUrl}
            ]
        });
        service = TestBed.inject(WeatherService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('getWeatherIcon', () => {

        [
            {
                input: 200,
                expected: 'art_storm.png'
            },
            {
                input: 501,
                expected: 'art_rain.png'
            },
            {
                input: 500,
                expected: 'art_light_rain.png'
            },
            {
                input: 520,
                expected: 'art_light_rain.png'
            },
            {
                input: 600,
                expected: 'art_snow.png'
            },
            {
                input: 801,
                expected: 'art_clouds.png'
            },
            {
                input: 741,
                expected: 'art_fog.png'
            },
            {
                input: 1000,
                expected: 'art_clear.png'
            },

        ].forEach(
            ({input, expected}) => {
                it(`should return ${expected} when id = ${input}`, () => {
                    const expectedIconUrl = `${iconBaseUrl}${expected}`;
                    const actual = service.getWeatherIcon(input);
                    expect(actual).toEqual(expectedIconUrl);
                });
            }
        );
    })

});
