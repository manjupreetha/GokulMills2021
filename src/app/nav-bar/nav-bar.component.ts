import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  app=[] as any;
  btns=[] as any;
  public href: string = "";
  // el: any;

  currentChoice: string = "home";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.href = this.router.url;
    
    // console.log("1>>>"+this.router.url);
    // console.log("1>>>"+window.location.href);
  }

  
 

  setActive(choice: string): void{
      // console.log("1>>"+this.currentChoice);
      // this.href = window.location.href;
      // console.log("2>>>"+this.href);
      this.currentChoice = choice;
      // console.log("2>>"+this.currentChoice);
  }

  getActive(choice: string) : string{
      if(this.currentChoice == choice)
           return "item active";
      else
           return "item";
  }
  

}
