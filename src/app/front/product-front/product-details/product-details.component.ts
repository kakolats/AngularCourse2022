import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/shared/models/products';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private router:ActivatedRoute,private route:Router,private prodServ:ProductService) { }
  product:Products|null=null;
  ngOnInit(): void {
    let idProduct=this.router.snapshot.params["id"];
    this.prodServ.getProduitsById(idProduct).subscribe(products=>this.product=products[0]);
    //this.route.navigateByUrl("/commande/cart");
  }

}
