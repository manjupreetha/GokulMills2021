import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as productDetails from 'src/assets/json/productDetails.json';
import * as subproducts from 'src/assets/json/subProducts.json';
import * as mainproducts from 'src/assets/json/mainProducts.json';

@Component({
  selector: 'app-sub-product-list-images',
  templateUrl: './sub-product-list-images.component.html',
  styleUrls: ['./sub-product-list-images.component.css']
})
export class SubProductListImagesComponent implements OnInit {

  // @Input() products :any;
  id: any;
  products=[] as any;
  mainproduct: any;
  subproduct: any;
  mainproductid: any;
  subproductid: any;
  productDetails: any = productDetails;
  subproducts: any = subproducts;
  mainproducts: any = mainproducts;

  constructor(private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.queryParams.subscribe(data => {
      this.id = data.get;
     this.productDetails.productDetails.forEach((product: any) => {
       if(product.sub_product_id == this.id){
         this.products.push(product);
       }
     });
     this.subproducts.subProducts.forEach((sp: any)=>{
       if(this.id==sp.id){
        this.subproduct = sp.product_name;
        this.subproductid = sp.id;
        this.mainproductid = sp.main_product_id;
       }
     });
     this.mainproducts.mainProducts.forEach((mp: any)=>{
       if(mp.id == this.mainproductid){
        this.mainproduct = mp.product_name;
       }
     });
   });
  }

}
