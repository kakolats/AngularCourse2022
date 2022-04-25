import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Categories } from 'src/app/shared/models/categories';
import { CategorieService } from 'src/app/shared/services/categorie.service';

@Component({
  selector: 'app-categorie-admin',
  templateUrl: './categorie-admin.component.html',
  styleUrls: ['./categorie-admin.component.css']
})
export class CategorieAdminComponent implements OnInit {
  categories:Categories[]=[]
  model:any;
  idMod:any=0;
  constructor(private catServ:CategorieService,private fb:FormBuilder) { 
    this.model=this.fb.group({
      name: [null,[Validators.required]]
    }) 
   }
  
  ngOnInit(): void {
    this.catServ.getCategories().subscribe(categories=>this.categories=categories);  
  }

  updateCat(cat:Categories){
    this.idMod=cat.id;
    this.model.setValue({
      "name":cat.name
    });
  }

  onFormSubmit(){
    const categorie:Categories=this.model.value as Categories;
    if(this.idMod!=0){
      categorie.id=this.idMod
      this.catServ.updateCategorie(categorie).subscribe(categorie=>{
        this.model.reset();
        this.idMod=0
        location.reload()
      })
    }else{
      this.catServ.addCategorie(categorie).subscribe(categorie=>{
      this.model.reset();
      location.reload()
      })
    }
    
  }
}
