import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Panier } from '../../models/panier';
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
  private panier:null|Panier=null;
  model:Users={
    login:"",
    password:""
  };
  page:string="";
  constructor(private route:ActivatedRoute,private authServ:AuthentificationService,
    private comServ:CommandeService,private panierServ:PanierService,
    private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>this.page=params["page"]);
    this.panierServ.getPanier().subscribe(panier=>this.panier=panier);
  }

  onFormSubmit(){
    
    this.authServ.getUserLoginAndPassword(this.model).subscribe(users=>{
      if(users.length>0){  
        if(this.page=="commande"){
          if(this.panier){
            this.comServ.addCommande(this.panier).subscribe(commande=>{
              console.log(commande.id);
              this.panierServ.clearPanier();
            });            
          }
            
        }
        this.router.navigateByUrl("/commande");
      }
      
    })
  }
}
