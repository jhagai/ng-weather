import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {LocationModel} from '../models/weather-conditions.model';
import {WeatherService} from '../weather.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-condition',
    templateUrl: './condition.component.html',
    styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

    @Input()
    location: LocationModel

    @Output()
    remove = new EventEmitter<string>();

    /**
     * This ViewChild's purpose is to distinguish clicks on the component
     * (to navigate to the details page) from clicks on close button (which
     * is contained inside the component).
     */
    @ViewChild('closeRef', {static: true})
    closeEltRef: ElementRef<HTMLSpanElement>;

    constructor(private weatherService: WeatherService, private router: Router) {
    }

    ngOnInit(): void {
        if (!this.location) {
            console.error('Location input should not be empty');
        }
    }

    @HostListener('click', ['$event.target'])
    showForecast(eventTarget: HTMLElement): void {
        // Do not navigate to forecast route if the user clicked on close button.
        if (!this.closeEltRef.nativeElement.contains(eventTarget)) {
            this.router.navigate(['/forecast', this.location.zip]);
        }
    }

    removeLocation(zipCode: string): void {
        this.remove.emit(zipCode);
    }
}
