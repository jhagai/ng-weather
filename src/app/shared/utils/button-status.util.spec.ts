import {TestScheduler} from 'rxjs/testing';
import {ButtonStatus, toButtonStatus} from './button-status.util';

describe('toButtonStatus', () => {

    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('should work on normal input', () => {
        testScheduler.run(({cold, expectObservable}) => {
            // GIVEN
            const source = '  -a';
            const input = '    -a|';
            const expected = 'ab-c 499ms d';
            const source$ = cold(source);
            const input$ = cold(input);
            // WHEN
            const actual$ = source$.pipe(toButtonStatus(input$));
            // THEN
            expectObservable(actual$).toBe(expected,
                {
                    a: ButtonStatus.READY,
                    b: ButtonStatus.PENDING,
                    c: ButtonStatus.DONE,
                    d: ButtonStatus.READY
                });
        });
    });

    it('should work on error input', () => {
        testScheduler.run(({cold, expectObservable}) => {
            // GIVEN
            const source = '  -a';
            const input = '    --#';
            const expected = 'ab-c 499ms d';
            const source$ = cold(source);
            const input$ = cold(input);
            // WHEN
            const actual$ = source$.pipe(toButtonStatus(input$));
            // THEN
            expectObservable(actual$).toBe(expected,
                {
                    a: ButtonStatus.READY,
                    b: ButtonStatus.PENDING,
                    c: ButtonStatus.DONE,
                    d: ButtonStatus.READY
                });
        });
    });

    it('should work on empty input', () => {
        testScheduler.run(({cold, expectObservable}) => {
            // GIVEN
            const source = '  -a';
            const input = '    --|';
            const expected = 'ab-c';
            const source$ = cold(source);
            const input$ = cold(input);
            // WHEN
            const actual$ = source$.pipe(toButtonStatus(input$));
            // THEN
            expectObservable(actual$).toBe(expected,
                {
                    a: ButtonStatus.READY,
                    b: ButtonStatus.PENDING,
                    c: ButtonStatus.READY
                });
        });
    });

})

