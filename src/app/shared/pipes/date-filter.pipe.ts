import { Pipe, PipeTransform } from '@angular/core';
import { Commandes } from '../models/commandes';
import * as moment from 'moment';

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {

  transform(commandes: Commandes[], start:Date,end:Date):Commandes[] {
    return commandes.filter(commande=>{
      return moment(this.dateFrToEn(commande.date)).isBetween(moment(start).add(-1,"days"),moment(end).add(1,"days"))
      ||!commande.isLivred||!commande.isPayed
    }) 
  }

  dateFrToEn(dateFr:string):string{
    let dt=dateFr.split("-");
    return `${dt[2]}-${dt[1]}-${dt[0]}`
  }

}
