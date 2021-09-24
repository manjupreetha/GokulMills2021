import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductHomeComponent } from './product-home/product-home.component';
import { ProductViewDetailsComponent } from './product-view-details/product-view-details.component';
import { SubProductListComponent } from './sub-product-list/sub-product-list.component';
import { SubProductListImagesComponent } from './sub-product-list-images/sub-product-list-images.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LinkBreadCrumbsComponent } from './link-bread-crumbs/link-bread-crumbs.component';


@NgModule({
  declarations: [ProductHomeComponent, ProductViewDetailsComponent, SubProductListComponent, SubProductListImagesComponent, LinkBreadCrumbsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule, 
    NgbModule
  ]
})
export class ProductsModule { }
