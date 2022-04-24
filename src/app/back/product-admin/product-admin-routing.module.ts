import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAdminDetailComponent } from './product-admin-detail/product-admin-detail.component';
import { ProductAdminListByCategorieComponent } from './product-admin-list-by-categorie/product-admin-list-by-categorie.component';
import { ProductAdminNewComponent } from './product-admin-new/product-admin-new.component';
import { ProductAdminComponent } from './product-admin.component';

const routes: Routes = [
  { path: '', component: ProductAdminComponent },
  { path: 'new', component: ProductAdminNewComponent },
  { path: 'details/:id', component: ProductAdminDetailComponent },
  { path: 'categorie/:id', component: ProductAdminListByCategorieComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductAdminRoutingModule { }
