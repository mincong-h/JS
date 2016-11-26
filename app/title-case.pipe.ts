import { Pipe, PipeTransform } from '@angular/core';

/**
 * Transfor to title case: upper case the first letter of the words in a string.
 */
@Pipe({name: 'titlecase', pure: false})
export class TitleCasePipe implements PipeTransform {
  transform(input: string): string {
    if (input.length === 0) {
      return '';
    }
    return input.replace(/\w\S*/g, (txt =>
        txt[0].toUpperCase() + txt.substr(1).toLowerCase()
    ));
  }
}
