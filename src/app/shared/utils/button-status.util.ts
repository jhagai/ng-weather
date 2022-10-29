import {catchError, defaultIfEmpty, mapTo, startWith, switchMap, takeLast} from 'rxjs/operators';
import {merge, Observable, of, OperatorFunction, timer} from 'rxjs';

export const enum ButtonStatus {
    READY = 'READY',
    PENDING = 'PENDING',
    DONE = 'DONE'
}

export function toButtonStatus(input$: Observable<unknown>): OperatorFunction<unknown, ButtonStatus> {
    return source$ => source$.pipe(
        switchMap(
            () => input$.pipe(
                // Pick last value just to make sure we wait for source completion.
                takeLast(1),
                // Returning null is intentional to pass through switchMap.
                catchError(() => of(null)),
                switchMap(() => {
                    const done$ = of(ButtonStatus.DONE);
                    const pending$ = timer(500).pipe(mapTo(ButtonStatus.READY));
                    return merge(done$, pending$);
                }),
                // If no value is sent, just return READY
                defaultIfEmpty(ButtonStatus.READY),
                // First value sent is READY
                startWith(ButtonStatus.PENDING)
            )
        ),
        startWith(ButtonStatus.READY)
    );

}
