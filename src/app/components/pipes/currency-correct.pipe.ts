import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyCorrect'
})
export class CurrencyCorrectPipe implements PipeTransform {
  transform(value: string | null, text: string = "", color: string = "black", ...args: unknown[]): unknown {
    return text + " " + value?.toString();
  }
}
