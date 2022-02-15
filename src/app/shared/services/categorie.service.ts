import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Categories } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private APIURL="localhost:3000/categories";
  constructor(private http:HttpClient) { }

  getCategories():Observable<Categories[]>{
    return this.http.get<Categories[]>(this.APIURL);
  }
  getCategoriesById(){
    
  }
}
