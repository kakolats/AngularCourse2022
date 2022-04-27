import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'product', loadChildren: () => import('./front/product-front/product-front.module').then(m => m.ProductFrontModule) },
  { path: 'commande', loadChildren: () => import('./front/commande-front/commande-front.module').then(m => m.CommandeFrontModule) },
  { path: 'authentification', loadChildren: () => import('./shared/authentification/authentification.module').then(m => m.AuthentificationModule) },
  { path: '',   redirectTo: '/product', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
