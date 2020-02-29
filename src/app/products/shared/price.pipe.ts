import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'price'})
export class PricePipe implements PipeTransform {
    transform(value:number): string {
        if (value > 800) {
            return value + ' (very expensive)'
        } else if (value > 100 && value < 800) {
            return value + ' (expensive)'
        } else {
            return value + ' (affordable)'
        }
    }
}