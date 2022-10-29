import {Component, HostListener, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {EMPTY, Observable, Subject} from 'rxjs';
import {ButtonStatus, toButtonStatus} from '../utils/button-status.util';
import {map} from 'rxjs/operators';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-submit-button',
    templateUrl: './submit-button.component.html',
    styleUrls: ['./submit-button.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class SubmitButtonComponent implements OnInit {

    @ViewChild('defaultReadyRef', {static: true})
    defaultReadyEltRef: TemplateRef<unknown>;

    @ViewChild('defaultDoneRef', {static: true})
    defaultDoneEltRef: TemplateRef<unknown>;

    @ViewChild('defaultPendingRef', {static: true})
    defaultPendingEltRef: TemplateRef<unknown>;

    private _readyTplEltRef: TemplateRef<unknown>;
    private _doneTplEltRef: TemplateRef<unknown>;
    private _pendingTplEltRef: TemplateRef<unknown>;

    submit$ = new Subject<string>();

    buttonStatus$: Observable<TemplateRef<unknown>> = EMPTY;

    get readyTplEltRef() {
        return this._readyTplEltRef;
    }

    @Input()
    set readyTplEltRef(value: TemplateRef<unknown>) {
        this._readyTplEltRef = value;
    }

    get doneTplEltRef() {
        return this._doneTplEltRef;
    }

    @Input()
    set doneTplEltRef(value: TemplateRef<unknown>) {
        this._doneTplEltRef = value;
    }

    get pendingTplEltRef() {
        return this._pendingTplEltRef;
    }

    @Input()
    set pendingTplEltRef(value: TemplateRef<unknown>) {
        this._pendingTplEltRef = value;
    }

    @Input()
    set source(source$: Observable<unknown>) {
        this.buttonStatus$ = this.submit$.asObservable().pipe(
            toButtonStatus(source$),
            map(buttonStatus => {
                switch (buttonStatus) {
                    case ButtonStatus.PENDING:
                        return this.pendingTplEltRef;
                    case ButtonStatus.DONE:
                        return this.doneTplEltRef;
                    default:
                        return this.readyTplEltRef;
                }
            })
        );
    }

    @HostListener('click')
    click() {
        this.submit$.next()
    }

    ngOnInit(): void {
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


}
