import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Categories } from 'src/app/shared/models/categories';
import { Products } from 'src/app/shared/models/products';
import { CategorieService } from 'src/app/shared/services/categorie.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-admin-new',
  templateUrl: './product-admin-new.component.html',
  styleUrls: ['./product-admin-new.component.css']
})
export class ProductAdminNewComponent implements OnInit {
  categories:Categories[]=[]
  model:any;
  constructor(private prodServ:ProductService,private fb:FormBuilder,
    private catServ:CategorieService) {
    this.model=this.fb.group({
      name: [null,[Validators.required]],
      description:[null,[Validators.required]],
      oldPrice:[null,[Validators.required]],
      qteStock:[null,[Validators.required]],
      qteSeuil:[null,[Validators.required]],
      categorie:[null,[Validators.required]],
    }) 
   }

  ngOnInit(): void {
    this.catServ.getCategories().subscribe(categories=>this.categories=categories);
  }

  onFormSubmit(){
    const product:Products=this.model.value as Products;
    product.isSolde=false;
    product.pathImg="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp";
    this.prodServ.addProduct(product).subscribe(product=>{
      this.model.reset();
      location.reload()
      })
  }

}
