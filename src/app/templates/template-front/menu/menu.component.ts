import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from 'src/app/shared/models/categories';
import { Panier } from 'src/app/shared/models/panier';
import { AuthentificationService } from 'src/app/shared/services/authentification.service';
import { CategorieService } from 'src/app/shared/services/categorie.service';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  panier:Panier={
    products:[],
    total:0
  };
  isLogin:boolean=false;
  categories:Categories[]=[];
  constructor(private catServ:CategorieService,private router:Router,private panierServ:PanierService,
    private authServ:AuthentificationService) { }

  ngOnInit(): void {
    this.catServ.getCategories().subscribe(categories=>this.categories=categories);
    this.panierServ.getPanier().subscribe(panier=>this.panier=panier);
    this.authServ.isLogin.asObservable().subscribe(isLogin=>this.isLogin=isLogin);
  }
  async onLoadView(idCat:any){
    await this.router.navigateByUrl(".",{skipLocationChange:true});
    this.router.navigateByUrl("/product/categories/"+idCat);
    
  }
  onLogout(){
    this.authServ.logout();
    this.authServ.isLogin.next(false);
    this.router.navigateByUrl("/product");
  }

}
