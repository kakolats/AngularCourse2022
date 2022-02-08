import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private prodServ:ProductService) { }
  //msg:string="";
  ngOnInit(): void {
    //this.prodServ.recevoirMessage().subscribe(msg=>this.msg=msg);
  }

}
