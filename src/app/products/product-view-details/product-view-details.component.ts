import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as productDetails from 'src/assets/json/productDetails.json';
import * as subproducts from 'src/assets/json/subProducts.json';
import * as mainproducts from 'src/assets/json/mainProducts.json';

@Component({
  selector: 'app-product-view-details',
  templateUrl: './product-view-details.component.html',
  styleUrls: ['./product-view-details.component.css']
})
export class ProductViewDetailsComponent implements OnInit {
  id: any;
  productDetail: any;
  mainproduct: any;
  subproduct: any;
  mainproductid: any;
  subproductid: any;
  productName:any;
  productDetails: any = productDetails;
  subproducts: any = subproducts;
  mainproducts: any = mainproducts;

  constructor(private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.queryParams.subscribe(data => {
       this.id = data.get;
      this.productDetails.productDetails.forEach((product:any) => {
        if(product.id == this.id){
          this.productDetail=product;
          this.subproductid=product.sub_product_id;
          this.productName=this.productDetail.product_name;
          // alert(this.productName);
        }
      });
      this.subproducts.subProducts.forEach((sp:any)=>{
        if(this.subproductid==sp.id){
         this.subproduct = sp.product_name;
         this.mainproductid = sp.main_product_id;
        }
      });
      this.mainproducts.mainProducts.forEach((mp:any)=>{
        if(mp.id == this.mainproductid){
         this.mainproduct = mp.product_name;
        }
      });

    });

  }

  

}
