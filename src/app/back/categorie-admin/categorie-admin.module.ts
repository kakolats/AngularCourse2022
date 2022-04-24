import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieAdminRoutingModule } from './categorie-admin-routing.module';
import { CategorieAdminComponent } from './categorie-admin.component';
import { CategorieAdminListComponent } from './categorie-admin-list/categorie-admin-list.component';
import { CategorieAdminNewComponent } from './categorie-admin-new/categorie-admin-new.component';


@NgModule({
  declarations: [
    CategorieAdminComponent,
    CategorieAdminListComponent,
    CategorieAdminNewComponent
  ],
  imports: [
    CommonModule,
    CategorieAdminRoutingModule
  ]
})
export class CategorieAdminModule { }
