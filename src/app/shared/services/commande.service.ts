import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commandes } from '../models/commandes';
import { Panier } from '../models/panier';
import { AuthentificationService } from './authentification.service';
const APIURL=`${environment.api}/commandes`;
@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient,private authServ:AuthentificationService) { }

  addCommande(panier:Panier):Observable<Commandes>{
    const commande:Commandes={
    date:new Date().toLocaleString(),
    mntTotal:panier.total,
    isPayed:false,
    isLivred:false,
    clientId:this.authServ.getUserStorage()==null?0:this.authServ.getUserStorage()?.id,
    client : this.authServ.getUserStorage(),
    products :panier.products
    }
    return this.http.post<Commandes>(APIURL,commande);
  }

  getCommandes():Observable<Commandes[]>{
    return this.http.get<Commandes[]>(APIURL);
  }

  getCommandesByClient(idClient:number):Observable<Commandes[]>{
    return this.http.get<Commandes[]>(`${APIURL}?clientId=${idClient}`);
  }
}
