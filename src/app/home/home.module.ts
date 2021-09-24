import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // NavBarComponent
  ]
})
export class HomeModule { }
