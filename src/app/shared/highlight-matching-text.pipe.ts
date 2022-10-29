import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';


function highlight(match: string): string {
    return match.length > 0 ? `<b>${match}</b>` : match;
}

@Pipe({
    name: 'highlightMatchingText',
    standalone: true
})
export class HighlightMatchingTextPipe implements PipeTransform {

    constructor(private sanitize: DomSanitizer) {
    }

    transform(value: string, match: string): unknown {
        const html = value.replace(new RegExp(match, 'gi'), highlight)

        return this.sanitize.bypassSecurityTrustHtml(html);
    }

}
