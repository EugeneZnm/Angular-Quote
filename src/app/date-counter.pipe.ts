import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCounter'
})
export class DateCounterPipe implements PipeTransform {
   // value type any being date object from quote
  transform(value: any): number {
    // getting current date using new Date function
    const today:Date = new Date();
    const todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    // return value
    const dateDifference = Math.abs(value - todayWithNoTime );
    const secondsInADay = 86400;
    // conversion to seconds
    const dateDifferenceSeconds = dateDifference * 0.001;

    const dateCounter = dateDifferenceSeconds / secondsInADay;

    if (dateCounter >= 1){
        return dateCounter;
    } else {
        return 0;
    }
  }

}
