import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from '../models/products';

const APIURL=`${environment.api}/products`;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(product:Products){
    return this.http.post<Products>(APIURL,product);
  }

  getProducts():Observable<Products[]>{
    return this.http.get<Products[]>(APIURL);
  }

  getProduitsById(id:number):Observable<Products>{
    return this.http.get<Products>(`${APIURL}/${id}`);
  }

  getProduitsByCategorie(id:number):Observable<Products[]>{
    return this.http.get<Products[]>(`${APIURL}?categorieId=${id}`);
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
