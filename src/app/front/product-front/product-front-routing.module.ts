import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFrontComponent } from './product-front.component';
import { ProductListByCategoriesComponent } from './product-list-by-categories/product-list-by-categories.component';

const routes: Routes = [
  { path: '', component: ProductFrontComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'categories/:id', component: ProductListByCategoriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductFrontRoutingModule { }
