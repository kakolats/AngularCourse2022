import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categories } from 'src/app/shared/models/categories';
import { Panier } from 'src/app/shared/models/panier';
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

  categories:Categories[]=[];
  constructor(private catServ:CategorieService,private router:Router,private panierServ:PanierService) { }

  ngOnInit(): void {
    this.catServ.getCategories().subscribe(categories=>this.categories=categories);
    this.panierServ.getPanier().subscribe(panier=>this.panier=panier);
  }
  async onLoadView(idCat:any){
    await this.router.navigateByUrl(".",{skipLocationChange:true});
    this.router.navigateByUrl("/product/categories/"+idCat);
    
  }

}
