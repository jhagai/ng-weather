import {Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';
import {AutocompleteOption} from '../../core/models/countries.model';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {map, startWith, tap} from 'rxjs/operators';
import {EMPTY, Observable} from 'rxjs';
import {CommonModule} from '@angular/common';
import {HighlightMatchingTextPipe} from '../highlight-matching-text.pipe';

@Component({
    selector: 'app-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.css'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, HighlightMatchingTextPipe],
    providers: [
        {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: AutocompleteComponent}
    ]
})
export class AutocompleteComponent implements ControlValueAccessor {

    @ViewChild('inputRef', {static: true})
    inputEltRef: ElementRef<HTMLInputElement>;

    onChangeFn: any;

    readonly formControl = new FormControl<string>('');

    filteredOptions$: Observable<AutocompleteOption[]> = EMPTY;

    private selected: AutocompleteOption = null;

    showDropdown = false;

    @HostListener('document:click', ['$event.target'])
    click(target) {
        if (this.element.nativeElement.contains(target)) {
            if (this.inputEltRef.nativeElement.contains(target)) {
                this.showDropdown = true;
            }
        } else {
            this.showDropdown = false;
        }
    }

    @Input()
    set options(options: AutocompleteOption[]) {
        this.filteredOptions$ = this.formControl.valueChanges.pipe(
            startWith(this.formControl.value),
            tap(value => {
                if (this.selected && this.selected.name !== value) {
                    this.selected = null;
                    this.onChangeFn(null);
                }
            }),
            map(value => {
                return options.filter(opt => opt.name.toUpperCase().indexOf(value.toUpperCase()) > -1)
            }),
        )
        ;
    }

    constructor(private element: ElementRef) {
    }

    writeValue(obj: AutocompleteOption): void {
        this.selected = obj;
        this.formControl.setValue(obj?.name ?? '');
    }

    registerOnChange(fn: any): void {
        this.onChangeFn = fn;
    }

    registerOnTouched(fn: any): void {
        // Not implemented
    }

    setDisabledState?(isDisabled: boolean): void {
        // Not implemented
    }

    selectOption(selected: AutocompleteOption) {
        this.selected = selected;
        this.formControl.setValue(selected.name);
        this.onChangeFn(selected);
        this.showDropdown = false;
    }

    trackByCode(_, {code}: AutocompleteOption): string {
        return code;
    }
}
