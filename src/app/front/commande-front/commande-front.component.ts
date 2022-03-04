import { Component, OnInit } from '@angular/core';
import { Commandes } from 'src/app/shared/models/commandes';
import { Users } from 'src/app/shared/models/users';
import { AuthentificationService } from 'src/app/shared/services/authentification.service';
import { CommandeService } from 'src/app/shared/services/commande.service';

@Component({
  selector: 'app-commande-front',
  templateUrl: './commande-front.component.html',
  styleUrls: ['./commande-front.component.css']
})
export class CommandeFrontComponent implements OnInit {
  start:Date=new Date();
  end:Date=new Date();
  user:Users|null=null;
  commandes:Commandes[]=[];
  commandeId:Commandes|null=null;
  constructor(private comServ:CommandeService,private authServ:AuthentificationService) { }

  ngOnInit(): void {
    this.user=this.authServ.getUserStorage();
    this.comServ.getCommandesByClient(this.user?.id as number).subscribe(
      commandes=>this.commandes=commandes
    )
  }

  onComDetails(idCom:any){
    this.comServ.getCommandeById(idCom).subscribe(commande=>this.commandeId=commande);
  }

  onChangeStatus(status:any,commande:any){
    if(status=="payement"){
      commande.isPayed=true;
    }
    if(status=="livraison"){
      commande.isLivred=true;
    }
    this.comServ.updateCommande(commande).subscribe(com=>this.commandeId=com);
  }
}
