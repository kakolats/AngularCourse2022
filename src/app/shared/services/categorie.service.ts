import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categories } from '../models/categories';

const APIURL=`${environment.api}/categories`;
@Injectable({
  providedIn: 'root'
})
export class CategorieService {


  constructor(private http:HttpClient) { }

  getCategories():Observable<Categories[]>{
    return this.http.get<Categories[]>(APIURL);
  }
  getCategoriesById(idCat:number){
    return this.http.get<Categories[]>(`${APIURL}/${idCat}`);
  }

  addCategorie(categorie:Categories){
    return this.http.post<Categories>(APIURL,categorie);
  }

  updateCategorie(categorie:Categories){
    return this.http.put<Categories>(`${APIURL}/${categorie.id}`,categorie)
  }
}
