import { Component, OnInit, Input } from '@angular/core';
// import * as mainproducts from 'src/assets/json/mainProducts.json';
import * as mainProducts from 'src/assets/json/mainProducts.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {

  mainProducts=[] as any;
  constructor(private activatedroute: ActivatedRoute) { }
   data: any = mainProducts;

  ngOnInit(): void {
    //  console.log(mainProducts);
    this.data.mainProducts.forEach((product: any) => {
     this.mainProducts.push(product);             
    });
    // this.data.mainProducts.forEach((element:any) => {
    //   this.mainProducts.push(element);
    // });
  }

}
