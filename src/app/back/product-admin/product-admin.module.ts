import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductAdminRoutingModule } from './product-admin-routing.module';
import { ProductAdminComponent } from './product-admin.component';
import { ProductAdminNewComponent } from './product-admin-new/product-admin-new.component';
import { ProductAdminDetailComponent } from './product-admin-detail/product-admin-detail.component';
import { ProductAdminListByCategorieComponent } from './product-admin-list-by-categorie/product-admin-list-by-categorie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductAdminComponent,
    ProductAdminNewComponent,
    ProductAdminDetailComponent,
    ProductAdminListByCategorieComponent
  ],
  imports: [
    CommonModule,
    ProductAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductAdminModule { }
