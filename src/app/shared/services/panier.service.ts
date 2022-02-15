import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { Panier } from '../models/panier';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class PanierService {


  constructor() { }
  private panier:BehaviorSubject<Panier>=new BehaviorSubject<Panier>({
    products:[],
    total:0
  });

  addProductToPanier(produit:Products,qte:number=1){
    produit.qteCmde=qte;
    let isExiste=false;
    this.getPanier().pipe(take(1)).subscribe(panier=>{
      for (const product of panier.products) {
        if(produit.id==product.id){
          if(product.qteCmde){
            console.log(product.qteCmde);
            console.log(qte);
            product.qteCmde+=qte;
            console.log(product.qteCmde);
          }
          isExiste=true;
        }
      }
      const newProducts:Products[]=isExiste?panier.products:[...panier.products,produit];
        
      
      let price:number=(produit.isSolde?produit.newPrice:produit.oldPrice) as number;

      let total=panier.total+price*qte
      this.panier.next({
        products:newProducts,
        total:total
      });
    })
  }

  getPanier():Observable<Panier>{
    return this.panier.asObservable();
  }

  clearPanier(){
    this.panier.next({
      products:[],
      total:0
    });
  }

  removeProductFromPanier(produit:Products){

  }
}
