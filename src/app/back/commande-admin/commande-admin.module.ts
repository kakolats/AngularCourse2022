import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeAdminRoutingModule } from './commande-admin-routing.module';
import { CommandeAdminComponent } from './commande-admin.component';
import { CommandeAdminListComponent } from './commande-admin-list/commande-admin-list.component';


@NgModule({
  declarations: [
    CommandeAdminComponent,
    CommandeAdminListComponent
  ],
  imports: [
    CommonModule,
    CommandeAdminRoutingModule
  ]
})
export class CommandeAdminModule { }
