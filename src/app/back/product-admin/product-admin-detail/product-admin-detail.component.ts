import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/shared/models/products';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-admin-detail',
  templateUrl: './product-admin-detail.component.html',
  styleUrls: ['./product-admin-detail.component.css']
})
export class ProductAdminDetailComponent implements OnInit {

  product:Products|null=null;
  constructor(private route:ActivatedRoute,private router:Router,private prodServ:ProductService) { }

  ngOnInit(): void {
    let idProduct=this.route.snapshot.params["id"];
    this.prodServ.getProduitsById(idProduct).subscribe(products=>this.product=products);
  }

  
}
