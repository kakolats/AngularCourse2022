import { Component, OnInit } from '@angular/core';
import { Panier } from 'src/app/shared/models/panier';
import { Products } from 'src/app/shared/models/products';
import { PanierService } from 'src/app/shared/services/panier.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-front',
  templateUrl: './product-front.component.html',
  styleUrls: ['./product-front.component.css']
})
export class ProductFrontComponent implements OnInit {

  products:Products[]=[];
  panier:Panier={
    products:[],
    total:0
  };

  constructor(private prodServ:ProductService,private panierServ:PanierService) { }

  ngOnInit(): void {
    this.prodServ.getProducts().subscribe(products=>this.products=products);
  }

  onAddToPanier(produit:any){
    this.panierServ.addProductToPanier(produit as Products)
  }

}
