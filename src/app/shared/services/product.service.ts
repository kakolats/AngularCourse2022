import { Injectable } from '@angular/core';
import { filter, map, Observable, of, Subject } from 'rxjs';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  private products$:Observable<Products[]>=of([
    {
      id:1,
      name:"Produit1",
      description:"Description du produit 1",
      oldPrice:5000,
      newPrice:4000,
      qteStock:12,
      qteSeuil:12,
      isSolde:true,
      categorie:{
        id:1,
        name:"Categorie 1"
      },
      pathImg:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
    },
    {
      id:2,
      name:"Produit2",
      description:"Description du produit 2",
      oldPrice:5000,
      newPrice:4000,
      qteStock:12,
      qteSeuil:12,
      isSolde:true,
      categorie:{
        id:1,
        name:"Categorie 1"
      },
      pathImg:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
    },
    {
      id:3,
      name:"Produit3",
      description:"Description du produit 3",
      oldPrice:5000,
      newPrice:0,
      qteStock:12,
      qteSeuil:12,
      isSolde:false,
      categorie:{
        id:1,
        name:"Categorie 1"
      },
      pathImg:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
    },
    {
      id:4,
      name:"Produit4",
      description:"Description du produit 4",
      oldPrice:5000,
      newPrice:0,
      qteStock:12,
      qteSeuil:12,
      isSolde:false,
      categorie:{
        id:2,
        name:"Categorie 2"
      },
      pathImg:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
    },
    {
      id:5,
      name:"Produit5",
      description:"Description du produit 5",
      oldPrice:5000,
      newPrice:0,
      qteStock:12,
      qteSeuil:12,
      isSolde:false,
      categorie:{
        id:2,
        name:"Categorie 2"
      },
      pathImg:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
    },
    {
      id:6,
      name:"Produit6",
      description:"Description du produit 6",
      oldPrice:5000,
      newPrice:0,
      qteStock:12,
      qteSeuil:12,
      isSolde:false,
      categorie:{
        id:2,
        name:"Categorie 2"
      },
      pathImg:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp"
    }
  ]);

  getProducts():Observable<Products[]>{
    return this.products$;
  }

  getProduitsById(id:number):Observable<Products[]>{
    return this.products$.pipe(
      map(products=>{
        return products.filter(product=>product.id==id)
      })
    )
  }

  getProduitsByCategorie(id:number):Observable<Products[]>{
    return this.products$.pipe(
      map(products=>{
        return products.filter(product=>product.categorie.id==id)
      })
    )
  }

  private subject$:Subject<string>=new Subject();

  envoyerMessage(msg:string){
    this.subject$.next(msg);
  }

  recevoirMessage():Observable<string>{
    return this.subject$.asObservable();
  }
  /* 
  private numbers$:Observable<number[]>=of([4,5,6,12]);
  getNumbers():Observable<number[]>{
    return this.numbers$;
  }

  getNumbersPairs():Observable<number[]>{
    return this.numbers$.pipe(
      map(x=>{
        return x.filter(y=>y%2==0)
      })
    )
  } */


}
