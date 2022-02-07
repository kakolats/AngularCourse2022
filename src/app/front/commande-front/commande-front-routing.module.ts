import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeAddComponent } from './commande-add/commande-add.component';
import { CommandeCartComponent } from './commande-cart/commande-cart.component';
import { CommandeFrontComponent } from './commande-front.component';
import { CommandeListByDateComponent } from './commande-list-by-date/commande-list-by-date.component';

const routes: Routes = [
  { path: '', component: CommandeFrontComponent },
  { path: 'cart', component: CommandeCartComponent },
  { path: 'date', component: CommandeListByDateComponent },
  { path: 'add', component: CommandeAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeFrontRoutingModule { }
