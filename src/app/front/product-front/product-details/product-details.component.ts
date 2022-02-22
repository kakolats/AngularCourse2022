import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/shared/models/products';
import { PanierService } from 'src/app/shared/services/panier.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private prodServ:ProductService,
  private panierServ:PanierService) { }
  isNull:boolean=false;
  product:Products|null=null;
  products:Products[]=[];
  message:string="";
  isInvalide:boolean=false;
  ngOnInit(): void {
    let idProduct=this.route.snapshot.params["id"];
    this.prodServ.getProduitsById(idProduct).subscribe(products=>this.product=products);
    //this.route.navigateByUrl("/commande/cart");
    let idCat:any=this.product?.categorie.id;
    this.prodServ.getProduitsByCategorie(idCat).subscribe(products=>{
      return this.products=products.filter(p=>p.id!=idProduct)
    });
  }

  async onLoadView(product:any){
    await this.router.navigateByUrl(".",{skipLocationChange:true});
    this.router.navigateByUrl(`/product/details/${product.id}`);

  }

  onAddToPanier(produit:any,qte:any){
    this.panierServ.addProductToPanier(produit as Products,qte)
  }

  onValideQuantite(qteComde:any){
    let qteStock:number=this.product?.qteStock??0;
    

    if(qteComde==""||qteComde==0){
      this.isInvalide=true;
      this.message="Veuillez saisir une quantité";
      this.isNull=true;
    }else{
      if(qteStock<(qteComde as number)){
        this.isInvalide=true;
        this.message="La quantite commandée est indisponible";
        this.isNull=true;
      }else{
        this.isInvalide=false;
        this.message="";
        this.isNull=false;
      }
    }

    
  }


}
