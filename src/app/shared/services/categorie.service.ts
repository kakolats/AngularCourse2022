import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Categories } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private categories$:Observable<Categories[]> = of([
    {
      id:1,
      name:"Categorie 1"
    },
    {
      id:2,
      name:"Categorie 2"
    }

  ])
  constructor() { }

  getCategories():Observable<Categories[]>{
    return this.categories$;
  }
  getCategoriesById(){
    
  }
}
