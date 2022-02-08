import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/shared/models/products';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list-by-categories',
  templateUrl: './product-list-by-categories.component.html',
  styleUrls: ['./product-list-by-categories.component.css']
})
export class ProductListByCategoriesComponent implements OnInit {

  products:Products[]=[];
  constructor(private route:ActivatedRoute,private router:Router,private prodServ:ProductService) { }

  ngOnInit(): void {
    let idCat=this.route.snapshot.params["id"];
    this.prodServ.getProduitsByCategorie(idCat).subscribe(products=>this.products=products);
  }

}
