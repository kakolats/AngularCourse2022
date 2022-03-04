import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterMoneyPipe implements PipeTransform {

  transform(montant: any,devise:string="CFA"): string {
    if(devise=="Euros"){
      montant=(montant/655).toFixed(2)
    }
    return `${montant} ${devise}`;
  }

}
