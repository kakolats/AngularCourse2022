import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/shared/models/categories';
import { CategorieService } from 'src/app/shared/services/categorie.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  categories:Categories[]=[];
  constructor(private catServ:CategorieService) { }

  ngOnInit(): void {
    this.catServ.getCategories().subscribe(categories=>this.categories=categories);
  }

}
