import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ConditionComponent} from './condition.component';
import {WeatherService} from '../weather.service';
import {LocationModel} from '../models/weather-conditions.model';
import {By} from '@angular/platform-browser';
import createSpyObj = jasmine.createSpyObj;

const SAMPLE_LOCATION_MODEL: LocationModel = {
    zip: '75000',
    imageUrl: 'http://fakeImage',
    data: {
        name: 'Paris',
        weather: [
            {
                id: 1,
                main: 'Clear'
            }
        ],
        main: {
            temp: 1,
            temp_max: 2,
            temp_min: 0
        },
    }

};

describe('ConditionComponent', () => {
    let component: ConditionComponent;
    let fixture: ComponentFixture<ConditionComponent>;

    beforeEach(async () => {
        const weatherServiceSpy = createSpyObj(WeatherService, ['getCurrentConditions']);
        await TestBed.configureTestingModule({
            declarations: [ConditionComponent],
            providers: [{provide: WeatherService, useValue: weatherServiceSpy}]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ConditionComponent);
        component = fixture.componentInstance;

        component.location = SAMPLE_LOCATION_MODEL;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();


        const debugElement = fixture.debugElement.query(By.css('h3'));
        expect(debugElement.nativeElement.innerText).toEqual('Paris (75000)');
    });
});
