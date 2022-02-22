import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../../models/users';
import { AuthentificationService } from '../../services/authentification.service';
import { CommandeService } from '../../services/commande.service';
import { PanierService } from '../../services/panier.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:Users={
    login:"",
    password:""
  };
  page:string="";
  constructor(private route:ActivatedRoute,private authServ:AuthentificationService,
    private comServ:CommandeService,private panierServ:PanierService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>this.page=params["page"]);
  }

  onFormSubmit(){
    this.authServ.getUserLoginAndPassword(this.model).subscribe(users=>{
      if(users.length>0){
        if(this.page=="commande"){
          this.panierServ.getPanier().subscribe(panier=>{
            this.comServ.addCommande(panier);
          })
          
        }
      }
    })
    console.log(this.model);
  }
}
