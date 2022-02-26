import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtreMoney'
})
export class FiltreMoneyPipe implements PipeTransform {

  transform(money:any):any {
    return `${money} CFA`;
  }

}
