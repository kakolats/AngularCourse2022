import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeFrontRoutingModule } from './commande-front-routing.module';
import { CommandeFrontComponent } from './commande-front.component';
import { CommandeCartComponent } from './commande-cart/commande-cart.component';
import { CommandeListByDateComponent } from './commande-list-by-date/commande-list-by-date.component';
import { CommandeAddComponent } from './commande-add/commande-add.component';



@NgModule({
  declarations: [
    CommandeFrontComponent,
    CommandeCartComponent,
    CommandeListByDateComponent,
    CommandeAddComponent
  ],
  imports: [
    CommonModule,
    CommandeFrontRoutingModule
  ]
})
export class CommandeFrontModule { }
