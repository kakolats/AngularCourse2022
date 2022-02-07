import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductFrontRoutingModule } from './product-front-routing.module';
import { ProductFrontComponent } from './product-front.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListByCategoriesComponent } from './product-list-by-categories/product-list-by-categories.component';


@NgModule({
  declarations: [
    ProductFrontComponent,
    ProductDetailsComponent,
    ProductListByCategoriesComponent
  ],
  imports: [
    CommonModule,
    ProductFrontRoutingModule
  ]
})
export class ProductFrontModule { }
