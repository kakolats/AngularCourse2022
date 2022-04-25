import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieAdminRoutingModule } from './categorie-admin-routing.module';
import { CategorieAdminComponent } from './categorie-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategorieAdminComponent
  ],
  imports: [
    CommonModule,
    CategorieAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategorieAdminModule { }
