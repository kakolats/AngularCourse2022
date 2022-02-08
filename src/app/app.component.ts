import { Component, OnInit } from '@angular/core';
import { ProductService } from './shared/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:string = 'angular-glrs3';
  //numbers:number[]=[];

  constructor(private prodServ:ProductService){

  }
  ngOnInit(): void {
    //this.prodServ.getNumbers().subscribe(numbers=>this.numbers=numbers)
  }

  /* onEnvoiMessage(msg:any){
    this.prodServ.envoyerMessage(msg);
  } */

}
