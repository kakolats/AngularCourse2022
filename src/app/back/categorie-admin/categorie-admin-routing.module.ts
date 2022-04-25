import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorieAdminComponent } from './categorie-admin.component';

const routes: Routes = [
  { path: '', component: CategorieAdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieAdminRoutingModule { }
