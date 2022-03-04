import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeFrontRoutingModule } from './commande-front-routing.module';
import { CommandeFrontComponent } from './commande-front.component';
import { CommandeCartComponent } from './commande-cart/commande-cart.component';
import { CommandeListByDateComponent } from './commande-list-by-date/commande-list-by-date.component';
import { CommandeAddComponent } from './commande-add/commande-add.component';
import { FilterMoneyPipe } from 'src/app/shared/pipes/filter-money.pipe';
import { DateFilterPipe } from 'src/app/shared/pipes/date-filter.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CommandeFrontComponent,
    CommandeCartComponent,
    CommandeListByDateComponent,
    CommandeAddComponent,
    FilterMoneyPipe, 
    DateFilterPipe,
  ],
  imports: [
    CommonModule,
    CommandeFrontRoutingModule,
    FormsModule
  ]
})
export class CommandeFrontModule { }
