import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeAdminComponent } from './commande-admin.component';

const routes: Routes = [{ path: '', component: CommandeAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeAdminRoutingModule { }
