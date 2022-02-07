import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/shared/models/products';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-front',
  templateUrl: './product-front.component.html',
  styleUrls: ['./product-front.component.css']
})
export class ProductFrontComponent implements OnInit {

  products:Products[]=[];
  constructor(private prodServ:ProductService) { }

  ngOnInit(): void {
    this.prodServ.getProducts().subscribe(products=>this.products=products);
  }

}
