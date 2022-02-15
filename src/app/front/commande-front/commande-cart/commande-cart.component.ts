import { Component, OnInit } from '@angular/core';
import { Panier } from 'src/app/shared/models/panier';
import { PanierService } from 'src/app/shared/services/panier.service';

@Component({
  selector: 'app-commande-cart',
  templateUrl: './commande-cart.component.html',
  styleUrls: ['./commande-cart.component.css']
})
export class CommandeCartComponent implements OnInit {

  panier:Panier={
    products:[],
    total:0
  };
  isEmpty:boolean=true;
  constructor(private panierServ:PanierService) { }

  ngOnInit(): void {
    this.panierServ.getPanier().subscribe(panier=>{
      this.panier=panier
      this.isEmpty=!(panier.products.length>0);
    });
  }

}
