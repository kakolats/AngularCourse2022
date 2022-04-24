import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/shared/models/products';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {

  products:Products[]=[];
  constructor(private prodServ:ProductService) { }

  ngOnInit(): void {
    this.prodServ.getProducts().subscribe(products=>this.products=products);
  }

}
