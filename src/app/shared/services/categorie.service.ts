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
  getCategoriesById(){
    
  }
}
